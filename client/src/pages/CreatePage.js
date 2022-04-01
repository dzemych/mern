import React, {useContext, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import authContext from "../context/authContext";
import {useHttpHook} from "../hooks/useHttp.hook";

const CreatePage = (props) => {
   const token = useContext(authContext).token
   const {request} = useHttpHook()
   const [inputVal, setinputVal] = useState('')
   const navigate = useNavigate()

   const submitHandler = async e => {
      e.preventDefault()
      const data = await request(
         '/api/link/generate',
         'POST',
         {from: inputVal},
         {Authorization: 'Bearer ' + token}
         )
      console.log(data)

      navigate('/detail/' + data.link._id)
   }

    return(
       <div className={'row'}>
          <div className={'col m8 offset-m2'}>
             <form onSubmit={submitHandler}>
                <input
                   type="text"
                   value={inputVal}
                   onChange={e => setinputVal(e.target.value)}
                   style={{marginTop: '25px'}}
                   placeholder={'Insert your link'}
                />
                <button
                  type={'submit'}
                  className={'btn yellow darken-4'}
                  style={{marginTop: 10}}
                >
                   Create
                </button>
             </form>
          </div>
       </div>
    )
}

export default CreatePage