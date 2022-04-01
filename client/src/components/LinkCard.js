import React from 'react'

const LinkCard = (props) => {
    return(
       <div>
          <h2>Link</h2>
          
          <p>
             Your link:
             <a href={props.link.to} target={'_blank'} rel={"noreferrer"}>
                {' ' + props.link.to}
             </a>
          </p>
          <p>
             Source:
             <a href={props.link.from} target={'_blank'} rel={"noreferrer"}>
                 {' ' + props.link.from}
             </a>
          </p>
          <p>
             Created at: <strong>{props.link.createdAt}</strong>
          </p>
          <p>
             Clicks: <strong>{props.link.clicked}</strong>
          </p>
       </div>
    )
}

export default LinkCard