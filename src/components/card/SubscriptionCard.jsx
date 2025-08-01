import React from 'react'
import "./subscriptionCard.css"

function SubscriptionCard({props}) {
    
  return (
    <div className='cardContainer'>
        <h2>{props.name}</h2>
        <p>{props.great}</p>
        <h1 className='price2'>{props.price}<span>/month</span></h1>
        <p><i className="fa-solid fa-check"></i>{props.freeDelivery}</p>
        <p>{props.cashback}</p>
        <p>{props.member}</p>
        <p>{props.benefits}</p>
        <p>{props.return}</p>
        <p>{props.gift}</p>
        <button className="btn4">{props.selectSubscription}</button>
    </div>
  )
}

export default SubscriptionCard