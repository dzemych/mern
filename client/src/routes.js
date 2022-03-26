import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import DetailPage from "./pages/DetailPage";
import LinksPage from "./pages/LinksPage";
import CreatePage from "./pages/CreatePage";
import AuthPage from "./pages/AuthPage";
import NotFoundPage from "./pages/NotFoundPage";

const getRoutes = (isAuth) => {
    if (isAuth) {
       return(
          <Routes>
             <Route path='/detail/:id' element={<DetailPage/>}>
             </Route>
             <Route path={'/links'} exact element={<LinksPage/>}>
             </Route>
             <Route path={'/create'} exact element={<CreatePage/>}>
             </Route>
             <Route path={'*'} element={<NotFoundPage/>}/>
          </Routes>
       )
    } else {
       return (
          <Routes>
             <Route path={'/'} element={<AuthPage/>}>
             </Route>
             <Route path={'*'} element={<NotFoundPage/>}/>
          </Routes>
       )
    }
}

export default getRoutes