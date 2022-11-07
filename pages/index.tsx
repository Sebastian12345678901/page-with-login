import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const getUsers = async (): Promise<Response> => {
    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })

    return res;
  }

  const handleLogin = () => {
    const users = getUsers()

    users.then((response) => {
      return response.json()
    }).then(result => {
      const test = result

      if (!result.error) {
        router.push({ pathname: '/landing-page', query: { name: result.name } })
        setIsLoggedIn(true)
        setErrorMessage('')
      } else {
        setErrorMessage('Wrong email or password')
      }
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === 'email') {
      setEmail(e.target.value)
    } else if (e.target.type === 'password') {
      setPassword(e.target.value)
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        Awesome webpage
      </Head>

      <main className={styles.main}>
        <h1 className={`${styles.container} ${styles.myColor}`}>
          Login
        </h1>
        <div>
          <ul className={styles.listWithNoBullets}>
            <li><input onChange={handleChange} type="email" placeholder='name.lastname@webhost.com' /></li>
            <li><input onChange={handleChange} type='password' placeholder='**********' /></li>
            <button onClick={handleLogin}>submit</button>
          </ul>
        </div>
        <span className={styles.errorMessage}> {errorMessage}</span>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div >
  )
}