import React, {useContext} from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useHttpHook} from "../hooks/useHttp.hook";
import ErrorPop from "../components/ErrorPop";
import authContext from "../context/authContext";


const AuthPage = (props) => {
   const auth = useContext(authContext)

   const navigate = useNavigate()

   const [form, setForm] = useState(() => {
      return {email: '', password: ''}
   })

   const {request, loading, error, clearError} = useHttpHook()

   const changeHandler = e => {
      setForm(prevState => ({...prevState, [e.target.name]: e.target.value}))
   }

   const signupHandler = async () => {
      const data = await request('/api/auth/signup', 'POST', {...form})
      auth.login(data.token, data.userId)

      navigate('/create')
   }

   const loginHandler = async () => {
      const data = await request('/api/auth/login', 'POST', {...form})

      auth.login(data.token, data.userId)
      navigate('/create')
   }

    return(
       <>
          {error && <ErrorPop error={error} onConfirm={clearError}/>}
          <div className="row" style={{marginTop: 20, position: "relative"}}>
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
                               value={form.email}
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
                               value={form.password}
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
                         onClick={loginHandler}
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
       </>
    )
}

export default AuthPage