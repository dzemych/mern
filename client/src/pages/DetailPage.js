import React, {useCallback, useContext, useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import {useHttpHook} from "../hooks/useHttp.hook";
import authContext from "../context/authContext";
import Loader from "../components/Loader";
import LinkCard from '../components/LinkCard'
import ErrorPop from "../components/ErrorPop";

const DetailPage = (props) => {
   const {request, loading, error} = useHttpHook()
   const token = useContext(authContext).token
   const navigate = useNavigate()
   const linkId = useParams().id
   const [link, setLink] = useState()

   const gotoLinks = () => {
      navigate('/links')
   }

   const fetchLink = useCallback(async () => {
      const data = await request(`/api/link/${linkId}`, 'GET', null, {
         Authorization: `Bearer ${token}`
      })
      console.log(data)
      setLink(data.link)
   }, [request, linkId, token])

   useEffect(() => {
      fetchLink().then(e => console.log(e))
   }, [linkId])

   if (loading) return <Loader/>

   if (error) return <ErrorPop error={error} onConfirm={gotoLinks}/>

    return(
        <>
           {
              !loading && link && <LinkCard link={link}/>
           }
        </>
    )
}

export default DetailPage