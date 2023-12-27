import React, { useEffect } from 'react'
import {useNavigate} from "react-router-dom"
import {useSelector} from "react-redux"

function Protect({children}) {
  const user = useSelector((state) => state?.user?.userData);
  console.log(user);
  const navigate = useNavigate()

  if(user){
    return children
  } else {
    navigate("/login")
  }
}

export default Protect