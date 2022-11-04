import type { NextApiRequest, NextApiResponse } from 'next'
import type { AppProps } from 'next/app'

type Auth = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Auth>
) {
  res.status(200).json({ name: 'John Doe' })
}
