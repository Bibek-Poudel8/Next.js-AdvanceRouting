import React from 'react'

const Page = async ({params}) => {
  const {slug} = await params
  
  return (
    <div>
      <h1>Welcome to docs</h1>
      {slug?.join('/')}
    </div>
  )
}

export default Page