import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const parms = useParams()
  return (
    <div>
      I am User {parms.username}
    </div>
  )
}

export default User
