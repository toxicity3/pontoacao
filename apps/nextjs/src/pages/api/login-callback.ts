import { NextApiRequest, NextApiResponse } from 'next';
import { clerkClient, getAuth } from '@clerk/nextjs/server';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { userId } = getAuth(req);
  if (!userId) {
    return res.redirect(307, '/sign-in');
  }
  // TODO: PROCURA A ROLA DELE POR FAVOR NUNCA TE PEDI NADA
  const role = 'PROCURA A ROLE DO SAFADO NO BANCO';
  await clerkClient.users.updateUserMetadata(userId, {
    privateMetadata: {
      role,
    },
  });
  return res.redirect(307, '/home');
}
