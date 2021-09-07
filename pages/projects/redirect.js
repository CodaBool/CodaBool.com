import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
// import { redirectSpinner } from '../../components/landingPage/Type'
// import TerminalAnimation from 'react-animated-term'

export default function Project() {
  const [error, setError] = useState()
  const router = useRouter()

  useEffect(() => {
    if (router.query.id === 'django-1') {
      router.push('https://codabool-django-blog.herokuapp.com')
    } else if (router.query.id === 'django-2') {
      router.push('https://codabool-django-social.herokuapp.com')
    } else if (router.query.id === '8') {
      router.push('https://p08-type-racer.herokuapp.com')
    } else if (router.query.id?.length > 0) {
      console.error('unknown route of', router.query.id)
      setError(true)
    }
  }, [router])

  if (error) {
    return (
      <Row className="m-0 p-0 mt-5">
        <div className="mx-auto mt-5">
          <h1 className="p-5 mt-5" style={{maxWidth: '40rem'}}>🗺️ Project Missing 🤔</h1>
          <Button className="w-100 ml-4" style={{maxWidth: '28rem'}} variant="outline-secondary" onClick={() => router.push('/projects')}>Return</Button>
        </div>
      </Row>
    )
  }

  return (
    <>
      <style global jsx>{`
        @keyframes fade {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
      <Row className="mt-5">
        <div className="mx-auto mt-5">
          <h5 className="text-center">
            Redirecting 
            <span style={{animation: 'fade 4s infinite'}}> . </span>
            <span style={{animation: 'fade 5s infinite'}}> . </span>
            <span style={{animation: 'fade 6s infinite'}}> . </span>
          </h5>
          {/* <TerminalAnimation
            lines={redirectSpinner}
            interval={5}
          /> */}
        </div>
      </Row>
    </>
  )
}