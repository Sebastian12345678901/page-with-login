import type { NextApiRequest, NextApiResponse } from 'next'

type User = {
  email: string,
  password: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  res.status(200).json({ email: 'John Doe', password: 'conan' })
}