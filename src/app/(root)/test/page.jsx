'use client'
import withAuth from "@/app/authProvider"

const protectedPage = () => {
  return (
    <div>protectedPage</div>
  )
}

export default withAuth(protectedPage) 