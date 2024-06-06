import dbConnect from '@/lib/dbConnect';
import UserModel, { Message } from '@/model/User';

export async function POST(request: Request) {
  await dbConnect();

  const { username, content } = await request.json();

  try {
    const user = await UserModel.findOne({ username });

    if (!user) {
      return Response.json(
        {
          success: false,
          message: 'User not found',
        },
        { status: 404 }
      );
    }

    // check is user accept the messages
    if (!user.isAcceptingMessage) {
      return Response.json(
        {
          success: false,
          message: 'User is not accepting the messages.',
        },
        { status: 403 }
      );
    }

    const newMessage = {
      content,
      createdAt: new Date(),
    };

    user.messages.push(newMessage as Message);

    await user.save();

    return Response.json(
      {
        success: true,
        messages: 'Message send successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in sending messages', error);
    return Response.json(
      {
        success: false,
        message: 'Error in sending messages',
      },
      { status: 500 }
    );
  }
}
