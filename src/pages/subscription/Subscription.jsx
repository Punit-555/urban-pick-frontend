import React from 'react'
import "./subscription.css"
import SubscriptionCard from '../../components/card/SubscriptionCard'

function Subscription() {

    const subscriptionCardDetail = [
        {
            name:"Basic",
            great:"Perfect for casual shoppers",
            price: "$9.99",
            freeDelivery: "Free delivery on orders over $50",
            cashback: "5% cashback on purchases",
            member: "Early access to sales",
            benefits: "Priority customer support",
            selectSubscription: "Get Started"
        },
           {
            name:"Premium",
            great:"Best for frequent shoppers",
            price: "$19.99",
            freeDelivery: "Free delivery on all orders",
            cashback: "10% cashback on purchases",
            member: "Exclusive member-only deals",
            benefits: "24/7 premium support",
            return: "Free returns",
            selectSubscription: "Get Premium"
        },
           {
            name:"Family",
            great:"Great for households",
            price: "$29.99",
            freeDelivery: "Free delivery on all orders",
            cashback: "15% cashback on purchases",
            member: "Up to 5 family members",
            benefits: "Shared benefits",
            return: "Free returns",
            gift:"Monthly surprise gift",
            selectSubscription: "Choose Family"
        }
    ]

    
  return (
    <div className='maindiv'>
        <h1 className='heading2' >Choose Your Plan</h1>
        <p className='para2'>Select the subscription that fits your shopping needs. Upgrade, downgrade, or <br />cancel anytime.</p>

        <main className='flexbox'>
            
                {
                    subscriptionCardDetail.map((item) => {
                        return <SubscriptionCard props={item} />

                    })
                }
        </main>
    </div>
  )
}

export default Subscription