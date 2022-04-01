import React from 'react'
import {useNavigate} from "react-router-dom";

const LinkOverview = ({link}) => {

   const navigate = useNavigate()

   const clickHandler = e => {
      e.preventDefault()
      navigate('/detail/' + link._id)
   }

    return(
       <div style={{
          border: '1px solid grey',
          marginTop: '8px',
          padding: '5px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          borderRadius: '8px',
          cursor: 'pointer'
       }}
       onClick={clickHandler}
       >
          <a
             href={link.to}
             target={'_blank'}
             rel={"noreferrer"}
             onClick={e => e.stopPropagation()}
          >
             {link.to}
          </a>
          <p>Created at: <b>{link.createdAt}</b></p>
       </div>
    )
}

export default LinkOverview