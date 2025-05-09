import { useState } from "react";

export default function BasicTimer() {
    const startingValue = 0
    const [time, setTime] = useState(startingValue)

    setTimeout(() => {
        setTime(time + 1)
    }, 1000);

    return (
        <>
            <h2>Basic Timer</h2>
            <div>{time}</div>
            <hr />
        </>
    );
}
