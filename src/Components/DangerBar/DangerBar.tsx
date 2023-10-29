import { ProgressBar } from "react-bootstrap"

//Se especifica cuales son los props y el tipo de dato que el componente hijo puede recibir
type DangerBarProps = {
    value: number;
};

//El componente hijo tiene "Argumentos" del tipo "DangerBarProps"
const DangerBar = ({value} : DangerBarProps) => {

    //Logica segun el valor recibido del componente padre se mostrara un color diferente 
    const gerVariant = ( value:number)=>{

        if (value<30) {
            return 'sucess';
        }else if (value < 60) {
            return 'warning';
        }else{
            return 'danger';
        }
    };
    return(
        <ProgressBar animated now = {value} variant= {gerVariant(value)}/>

    )

}

export default DangerBar