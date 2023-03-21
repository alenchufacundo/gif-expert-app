import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    //usar hook useState para manejar el Estado y los cambios q se producen en el input
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        //elimina espacios vacios y acepta solo mayores a 1 caracter
        if( inputValue.trim().length <= 1 ){
            return
        }

        // setCategories( (categories) => 
        //     [inputValue, ...categories]
        // );
        onNewCategory( inputValue.trim() );
        //setea el input a vacio de nuevo.
        setInputValue("");
    }

  return (
    <form onSubmit={onSubmit}>
        <input 
            type="text"
            placeholder="Buscar gifs"
            value= {inputValue}
            onChange= {onInputChange}
        />
    </form>
  )

}
