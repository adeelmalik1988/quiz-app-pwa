import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../../Lotties/29208-loading.json'

export const LoadingPage = () => {


    const defaultOptions = {
        loop: true,
        autoplay: true,
        speed: 2,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        }
    };

    return (
        <div>

            <Lottie options={defaultOptions}
                speed={2}
            height={200}
            width={200}
            />
        </div>
    )
}

