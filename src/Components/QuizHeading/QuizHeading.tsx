import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../../Lotties/28891-quiz-bump.json'

export const QuizHeading = () => {


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
                speed={1}
            height={200}
            width={400}
            />
        </div>
    )
}

