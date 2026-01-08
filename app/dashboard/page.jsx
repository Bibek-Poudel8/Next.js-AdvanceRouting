import Link from 'next/link'
import React from 'react'

const DashboardPage = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link href={"/dashboard/reports"}>View Reports</Link>
      <br></br>
      <Link href={"/profile"}>View Profile</Link>
    </div>
  )
}

export default DashboardPage
