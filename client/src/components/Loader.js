import React from 'react'

const Loader = (props) => {
    return(
       <div style={{
          margin: '15px auto'
       }}>
          <div className="preloader-wrapper big active">
             <div className="spinner-layer spinner-blue-only">
                <div className="circle-clipper left">
                   <div className="circle"/>
                </div>
                <div className="gap-patch">
                   <div className="circle"/>
                </div>
                <div className="circle-clipper right">
                   <div className="circle"/>
                </div>
             </div>
          </div>
       </div>
    )
}

export default Loader