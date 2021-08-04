import React , { useState, useEffect } from 'react'

const StopWatch = () => {
    const [currentTime, setCurrentTime] = useState(0)
    const [isStarting , setIsStarting] = useState(false)

    useEffect(() => {
        let interval = null;
        if (isStarting) {
            interval = setInterval(() => {
                setCurrentTime( prevState => prevState+ 10)
            }, 10)
        }
        else {
            clearInterval(interval)
        }
        return () => {
            clearInterval(interval)
        }
    },[isStarting])

    const handleClear = () => {
        setIsStarting(false)
        setCurrentTime(0)
    }

    return (
        <div>
            <div>{currentTime}</div>
            {!isStarting && currentTime == 0 && <button onClick={() => setIsStarting(true)}>Start</button>}
            {isStarting && <button onClick={() => setIsStarting(false)}>Stop</button>}
            {!isStarting  && currentTime !== 0 && <button onClick={() => setIsStarting(true)}>Resume</button>}
            <button onClick={() => handleClear()}>Clear</button> 
        </div>
    )
}

export default StopWatch
