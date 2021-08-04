import React, { useState , useEffect } from 'react'

const Clock = () => {
    const [timer,setTimer] = useState('')

    useEffect(() => {
      let interval =  setInterval(() => {
            let currentTime = new Date();
            let hours ="0" +currentTime.getHours()+"";
            let min ="0" +currentTime.getMinutes()+"";
            let seconds ="0" + currentTime.getSeconds()+"";
            setTimer(`${hours.slice(-2)}:${min.slice(-2)}:${seconds.slice(-2)}`)
        }
        , 1000)
        return () => {
           clearInterval()
        };
    },[])

    return (
        <div>
            {timer}
        </div>
    )
}

export default Clock
