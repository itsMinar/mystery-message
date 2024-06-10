import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import dbConnect from '@/lib/dbConnect';
import UserModel from '@/model/User';
import { User, getServerSession } from 'next-auth';

type DeleteParamsType = {
  params: {
    messageid: string;
  };
};

export async function DELETE(request: Request, { params }: DeleteParamsType) {
  const messageId = params.messageid;

  await dbConnect();

  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return Response.json(
      {
        success: false,
        message: 'Not Authenticated!',
      },
      { status: 401 }
    );
  }

  const user: User = session?.user as User;

  try {
    const updatedResult = await UserModel.updateOne(
      { _id: user._id },
      { $pull: { messages: { _id: messageId } } }
    );

    if (updatedResult.modifiedCount === 0) {
      return Response.json(
        {
          success: false,
          message: 'Message not found or Already deleted',
        },
        { status: 404 }
      );
    }

    return Response.json(
      {
        success: true,
        message: 'Message Deleted Successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in Deleting message', error);
    return Response.json(
      {
        success: false,
        message: 'Error in Deleting message',
      },
      { status: 500 }
    );
  }
}
