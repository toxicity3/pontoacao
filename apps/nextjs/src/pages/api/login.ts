import { NextApiRequest, NextApiResponse } from 'next';
import { clerkClient, getAuth } from '@clerk/nextjs/server';
import { prisma } from '@acme/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(501).end();
  }
  const { userId } = getAuth(req);

  if (!userId) {
    return res.redirect(307, '/sign-in');
  }
  const user = await clerkClient.users.getUser(userId);

  const primaryEmailAddress = user.emailAddresses.find(
    ({ id }) => id === user.primaryEmailAddressId,
  );

  if (!primaryEmailAddress) {
    return res.redirect(307, '/sign-in');
  }

  const employee = await prisma.employee.findFirst({
    where: {
      email: primaryEmailAddress.emailAddress,
    },
    include: {
      role: true,
    },
  });

  if (!employee) {
    return res.redirect(307, '/sign-in');
  }

  await clerkClient.users.updateUser(userId, {
    publicMetadata: {
      role: employee.role.name,
    },
  });
  return res.redirect(307, '/home');
}
