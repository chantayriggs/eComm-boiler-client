import React, { useEffect } from 'react'

const Redirect = () => {


    const path = window.location.pathname

    useEffect( () => {
        window.location = `https:/${path}.com`
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default Redirect