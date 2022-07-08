import React, { useState } from 'react'

export default function SingleData({user, handleDelete}) {

    const [showMore, setShowMore] = useState(false)
  return (
    <div>
        <div className='container' key={user.id}>
        <div className='up'>
          
          <img alt= "logo" src={user.src} />
        </div>
        <div className='down'>
          <div className='price'>
          <p className='desc'>{user.description}</p>
          <p>{user.price} </p>
          </div>
          <div className='content'>
            <p>{showMore ? user.content : `${user.content.substring(0,200)}...` }
            <button onClick={() => setShowMore(!showMore)}> {showMore ? 'showless' : 'showmore'}</button> 
            {/* basically it is the logic of toggling and readmore or readless feature */}
            </p>
            {/* <button onClick={handleClick} ></button> yeh lokne pe click krne pe delete nh ho rha tha to uske liye apn ko id pass krna hga  */}
            <button onClick={(e)=>handleDelete(e, user.id)}>Not Interested</button> 
          </div>
        </div>
      </div>
    </div>
  )
}
