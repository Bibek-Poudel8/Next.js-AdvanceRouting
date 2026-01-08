import Link from 'next/link'
import React from 'react'

const Section = () => {
  return (
    <div>
      <h1>Section Page</h1>
      <Link href="/settings">Go to settings</Link>
      <br></br>
      <Link href="/admin">Go to admin</Link>
    </div>
  )
}

export default Section
