import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../../Lotties/29002-nashvilla-logo-reveal.json'

export const ResultCard = () => {


    const defaultOptions = {
        loop: false,
        autoplay: true,
        
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        }
    };

    return (
        <div>

            <Lottie options={defaultOptions}
                
            height={300}
            width={300}
            speed={2}
            />
        </div>
    )
}

