'use server';

import UserModel from '@/model/User';

export async function findUser(username: string) {
  try {
    const user = await UserModel.findOne({
      username,
      isVerified: true,
    }).select('username email');

    return user;
  } catch (error) {
    throw new Error('User Not Found');
  }
}
