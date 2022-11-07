import type { NextApiRequest, NextApiResponse } from 'next'
import type { AppProps } from 'next/app'

type Auth = {
  name: string | null
  error: Error | null
}

type Error = {
  description: string,
  code: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Auth>
) {
  const email = req.body["email"]
  const password = req.body["password"]
  if (email === 'sebbe@email.com' && password === 'conan') {
    res.status(200).json({ name: 'Sebbe', error: null})
  } else {
    // res.status(400).json({ name: null, {
    //   description: "Incorrect password",
    //   code: 400
    // } })
  }
}
