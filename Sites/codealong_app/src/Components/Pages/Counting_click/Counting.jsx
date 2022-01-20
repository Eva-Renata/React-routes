import { useState } from 'react' //det er til at kunne arbejde med hooks

export const Counter = () => {
    const [ number, setNumber] = useState(0); //number er en variabel
                                           //setName er funktion
                                           //useState er til at påvirke variablen


    return (
        <>
        <h2>Du har klikket på knappen {number} antal gange.</h2>
        {/* tekst med  dynamisk tal, som er styret fra klik på knap*/}
        <button onClick={() => setNumber(number + 1)}>Klik på knappen</button> 
        {/* knappen man skal klikke på, og klik er målet med setNumber */}
        </>
    )
}