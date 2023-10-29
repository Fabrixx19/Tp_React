import {useState} from 'react'
import AlertGenerator from '../AlertGenerator/AlertGenerator';


const AlertMessage = () => {
    //Guarda el valor del campo de texto 
    const [inputValue, setInputValue] = useState('');
    //Guarda el mensaje
    const [messege, setMessege] = useState ('');
    //Guarda el componente hijo segun el estado
    const[showAlert ,setShowAlert ] = useState(false);
    
    
    //Si el campo de texto esta vacio se guarda el texto ingresado por el usuario y se renderiza el hijo
    const handleClick = () => {
        if (inputValue.trim()!=='') {
            setShowAlert(true);
            setMessege(inputValue);
        }else{
            setShowAlert(false);
        }
    }

    return (
    <>
    <div className='m-3'>
        <h2>Ejemplo 2</h2>
        {/*Componente Padre */}
        <input type ="text" value = {inputValue} onChange={
            (e) => setInputValue (e.target.value)}/>
            <button onClick={handleClick}>Enviar</button>
        {/*Componente Padre */}
            {showAlert && <AlertGenerator message = {messege}/>}
    </div>
    
    </>
  )
}

export default AlertMessage