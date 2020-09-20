import React, { useEffect, useState } from 'react'

const Hello = () => {

    const [currentHello, setCurrentHello] = useState(0)

    const promotionInfo = [
        {
            header: "Promotion Header 1",
            details: "Donec at ultricies eros, in auctor mauris. Maecenas tincidunt nec nunc eget lobortis.",
            buttonText: "Sign Up"
        },
        {
            header: "Another Header 2",
            details: "Curabitur ullamcorper est ut neque pharetra, quis mattis metus efficitur.",
            buttonText: "Learn More"
        },
        {
            header: "And Another Header 3",
            details: "Etiam arcu quam, condimentum quis velit ac, condimentum ultrices risus. Vestibulum a ligula in justo sollicitudin rhoncus vel vel dolor. Donec at ultricies eros, in auctor mauris.",
            buttonText: "Shop Now!"
        }
    ]

    const promotionSlideCount = promotionInfo.length

    useEffect(() => {
        const interval = setInterval(() => {

            if (currentHello !== (promotionSlideCount - 1)) {
                setCurrentHello(currentHello + 1)
                
            } else {
                setCurrentHello(0)
            }


        }, 10000)
    
        return () => {
          clearInterval(interval)
        }
    })
    


    return (
        <div className="hello">
            <div className="wrapper">
                <div className="header animate">{promotionInfo[currentHello].header}</div>
                <div className="details animate">{promotionInfo[currentHello].details}</div>
                <button>{promotionInfo[currentHello].buttonText}</button>
            </div>
        </div>
    )
}


export default Hello