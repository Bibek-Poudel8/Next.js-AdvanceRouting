import React from 'react'

const Page = async ({params}) => {
  const { id } = await params
  
  return (
    <div>
      Page {id}
    </div>
  )
}

export default Page