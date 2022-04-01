import React, {useCallback, useContext, useEffect, useState} from 'react'
import authContext from "../context/authContext";
import {useHttpHook} from "../hooks/useHttp.hook";
import LinkOverview from "../components/LinkOverview";
import Loader from "../components/Loader";
import ErrorPop from "../components/ErrorPop";
import {useNavigate} from "react-router-dom";

const LinksPage = (props) => {
   const {token, userId} = useContext(authContext)
   const {request, error, loading} = useHttpHook()
   const [links, setLinks] = useState([])
   const navigate = useNavigate()

   const fetchAllLinks = useCallback(async () => {
      const res = await request('/api/link', 'GET', null, {
         Authorization: `Bearer ${token}`
      })

      console.log(res)
      setLinks(res.links)
   }, [token, userId, request])

   useEffect(() => {
      fetchAllLinks()
   }, [token, userId])

   if (error) return <ErrorPop error={error} onConfirm={() => {navigate('/')}}/>

    return(
       <div>
          <h1>Links Page</h1>
          {
             !loading && links.length > 0 ?
                links.map(link => {
                   return <LinkOverview key={link._id} link={link}/>
                })
             : <Loader/>
          }
       </div>
    )
}

export default LinksPage