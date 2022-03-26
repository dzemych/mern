import {useCallback, useState} from 'react'

const host = 'http://localhost:5000'

export const useHttp = () => {
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState(null)

   const request = async (url, method = 'GET', body = null, headers = {}) => {
      setLoading(true)
      try {
         body = JSON.stringify(body)


         const response = await fetch(
            `${host}${url}`,
            {
                  method, body,
                  headers: {'Content-Type': 'application/json;charset=utf-8'}
               }
            )

         const data = await response.json()

         console.log(response)
         if (!response.ok) throw new Error(response.message || 'Something went wrong')

         return data

         setLoading(false)
      } catch (e) {
         setLoading(false)
         setError({message: e.message})
         throw e
      }
   }

   return {loading, request, error}
}
