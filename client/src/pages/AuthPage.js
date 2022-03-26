import React from 'react'
import {useState} from 'react'
import {useHttp} from "../hooks/useHttp";


const AuthPage = (props) => {

   const [form, setForm] = useState(() => {
      return {email: '', password: ''}
   })

   const {request, loading, error} = useHttp()

   const changeHandler = e => {
      setForm(prevState => ({...prevState, [e.target.name]: e.target.value}))
   }

   const signupHandler = async () => {
      const data = await request('/api/auth/signup', 'POST', {...form})

      console.log(data)
   }

    return(
       <div className="row" style={{marginTop: 20}}>
          <div className="col s12 m6 offset-m3">
             <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                   <span className="card-title">Authorization</span>

                   <div>
                      <div className={'input-field'}>
                         <input
                            placeholder={'Enter your email'}
                            id={'email'}
                            type={'text'}
                            name={'email'}
                            onChange={changeHandler}
                         />
                         <label htmlFor="email" style={{position: "relative"}}>Email</label>
                      </div>

                      <div className={'input-field'}>
                         <input
                            placeholder={'Enter your password'}
                            id={'pwd'}
                            type={'password'}
                            name={'password'}
                            onChange={changeHandler}
                         />
                         <label htmlFor={"pwd"} style={{position: "relative"}}>Password</label>
                      </div>
                   </div>
                </div>
                <div className="card-action">
                   <button
                      disabled={loading}
                      className={'btn yellow darken-4'}
                      style={{marginRight: 10}}
                   >
                      Login
                   </button>
                   <button
                      disabled={loading}
                      className={'btn grey lighten 1 black-text'}
                      onClick={signupHandler}
                   >
                      Registration
                   </button>
                </div>
             </div>
          </div>
       </div>
    )
}

export default AuthPage