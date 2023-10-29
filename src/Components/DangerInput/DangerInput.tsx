import React, {useState} from "react";

import { Form } from "react-bootstrap";

import DangerBar from "../DangerBar/DangerBar";

const DangerInput = () => {
    //Variable que guarda el valor legido por el Usuario
    const [value, setValue] = useState(0);
    //Actualizamos el estado del Value
    const handleChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
    
        setValue(Number(event.target.value));
    }
    return (
<>
        <div className="m-3 w-50">
            <h2>Ejemplo 1</h2>

            {/*Componente Padre */}
            <Form.Range value = {value} onChange={handleChange}/>
            {/*Componente Hijo */}
            <DangerBar value = {value}/>

        </div>
</>

    )
}

export default DangerInput