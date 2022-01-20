import { useState } from 'react' //det er til at kunne arbejde med hooks
import styles from './KontaktFormular.module.scss' //importing scss

export const Formular = () => {
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState('');
    const [telefon, setTelefon] = useState('');
    const [method, setMethod] = useState('');
    const [kommentar, setKommentar] = useState(''); 
    // setting the fields to be empty in the beginning
    
    const handleForm = form => {
        // handleForm function is sending the data iin the fields. (setName,setKommentar...etc)

        // setName(document.getElementById('name').value);
        // setKommentar(document.getElementById('kommentar').value);
        // setEmail(document.getElementById('email').value);
        // setTelefon(document.getElementById('telefon').value);

        setName(form.name.value)
        setEmail(form.email.value)
        setTelefon(form.telefon.value)
        setMethod(form.kontakt.value)
        setKommentar(form.kommentar.value)
    }

    return (
        <>
        <h2>Kontakt formular</h2>
        <fieldset>
            <form action="" method='POST'>
            <div>
                <label htmlFor="name">Fulde navn</label>
                <input type="text" name="name" id="name" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
            </div>
            <div>
                <label htmlFor="telefon">Telefon</label>
                <input type="number" name="telefon" id="telefon" />
            </div>
            <div>
                <h5>Vælg kontakt metode:</h5>
                <label htmlFor="email">E-mail</label>
                <input type="radio" name="kontakt" id="kontakt_email" defaultChecked value="email"/>
                <label htmlFor="phone">Telefon</label>
                <input type="radio" name="kontakt" id="kontakt_telefon" value="telefon" />
                {/* they have the same name, but different id */}
            </div>
            <div>
                <label htmlFor="kommentar">Kommentar</label>
                <input type="textarea" name="kommentar" id="kommentar"/>
            </div>
            <button type="button" onClick={e => handleForm(e.target.form)}>Send</button>
            {/* on clicking the button, it happens the handleForm function */}
            {/* it is type button and not submit, so we don't reload the page and don't send the formular. we only have to display the infos */}
            <button type="reset">Fortryd</button>
        </form>
        
        <div id='formularData'>
            <h4>Navn:  {name}</h4>
            <h4>Telefon:   {telefon}</h4>
            <h4>Email:  {email} </h4>
            <h4>Kontakt metode:  {method} </h4>
            <h4>Kommentar:  {kommentar}</h4>
        </div>
        
        
        </fieldset>
        
        </>
    )
}