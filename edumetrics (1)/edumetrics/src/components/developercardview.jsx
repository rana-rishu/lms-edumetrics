import React from 'react'
import './developercardview.css'
const developercardview = (
   { developerimage,
    developername,
    developerusn,
    developercollege,
    developeremail
   }
) => {
  return (
    <div>
      <div className='developer-card-view'>
            <img className='image-view' src={developerimage} alt="college-image"/>
            <h1 className='developer-name'>{developername}</h1>
            <p className='developer-usn'>{developerusn}</p>
            <p className='developer-college'>{developercollege}</p>
            <p className='developer-email'>{developeremail}</p>
        </div>
    </div>
  )
}

export default developercardview
