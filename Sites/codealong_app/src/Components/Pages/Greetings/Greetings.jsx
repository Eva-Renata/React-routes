import { useState } from 'react' //det er til at kunne arbejde med hooks

export const Greetings = () => {
    const [ name, setName] = useState('Eva');  //name is variable
                                           //setName is function
                                           //useState er til at påvirke variablen

    console.log(name);

    return (
        <>
        <h2>Send en hilsen til {name}</h2>
        {/* tekst me dynamisk name, som er styret fra input feltet. hver gang man skrivet noget, så navn skifter */}
        <input type="text" onInput={e => setName(e.target.value)} />
        {/* <input type="text" onInput={() => setName('Jens')} /> */}
        {/* <button onClick={() =>setName('Jens')}>Klik for at sige hej til en anden</button> */}
        </>
    )
}