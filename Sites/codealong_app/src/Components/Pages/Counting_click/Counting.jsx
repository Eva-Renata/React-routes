import { useState } from 'react'

export const Counter = () => {
    const [ number, setNumber] = useState(0);

    return (
        <>
        <h2>Du har klikket på knappen {number} antal gange.</h2>
        <button onClick={() => setNumber(number + 1)}>Klik på knappen</button>
        </>
    )
}