import React from 'react'

const Page = async ({params}) => {
  const { id, reviewId } = await params
  
  return (
    <div>
      product {id} review {reviewId}
    </div>
  )
}

export default Page