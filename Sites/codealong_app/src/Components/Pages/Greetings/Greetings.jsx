import { useState } from 'react'

export const Greetings = () => {
    const [ name, setName] = useState('Eva');  //name is variable
                                           //setName is function
                                           //useState er til at påvirke variablen

    console.log(name);

    return (
        <>
        <h2>Send en hilsen til {name}</h2>
        <input type="text" onInput={e => setName(e.target.value)} />
        {/* <input type="text" onInput={() => setName('Jens')} /> */}
        {/* <button onClick={() =>setName('Jens')}>Klik for at sige hej til en anden</button> */}
        </>
    )
}