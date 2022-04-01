import {useState} from 'react'

const host = 'http://localhost:'

export const useHttpHook = () => {
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState(null)

   const clearError = () => {
      setError(null)
   }

   const request = async (url, method = 'GET', body = null, headers = {}, port = 5000) => {
      setLoading(true)
      try {
         if (body) body = JSON.stringify(body)

         const response = await fetch(
            `${host}${port}${url}`,
            {
                  method, body,
                  headers: {
                     'Content-Type': 'application/json;charset=utf-8',
                     ...headers
                  }
               }
            )

         const data = await response.json()

         if (!response.ok) throw new Error(data.message || 'Something went wrong')

         setLoading(false)

         return data
      } catch (e) {
         setLoading(false)
         setError({message: e.message})
         throw e
      }
   }

   return {loading, request, error, clearError}
}
