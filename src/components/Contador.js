import React, {useState, Fragment} from 'react' //realizar las importaciones correspondientes

const Contador = () => {
    
    const [numero, setNumero] = useState(0)

    const aumentar = () => {
        console.log('Me diste un click')
        setNumero(numero + 1)
    }
    
    return(
        <Fragment>
            <h3>Mi primer componente {numero}</h3>
            <button onClick={aumentar}>Aumentar</button>  
        </Fragment>   //se usa para no usar una etiqueta sin utilizar de html       
    );
}
 
export default Contador;