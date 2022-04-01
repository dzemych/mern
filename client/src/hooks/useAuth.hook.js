import {useState, useEffect} from "react";


const storageName = 'userData'

const useAuth = (props) => {
   const [userId, setUserId] = useState(null)
   const [token, setToken] = useState(null)
   const [isAuth, setAuth] = useState(false)
   const [ready, setReady] = useState(false)

   const login = (token, userId) => {
      setUserId(userId)
      setToken(token)
      setAuth(true)

      localStorage.setItem(storageName, JSON.stringify({
         token, userId
      }))
   }

   const logout = () => {
      setUserId(null)
      setToken(null)
      setAuth(false)

      localStorage.removeItem(storageName)
   }

   useEffect(() => {
      const data = JSON.parse(localStorage.getItem(storageName))
      console.log(data)
      if (data){
         setUserId(data.userId)
         setToken(data.token)
         setAuth(true)
      }
      setReady(true)
   }, [])

   return {login, logout, userId, isAuth, token, ready}
}

export default useAuth