import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
                                        //pasa el valor en forma de array
    const [categories, setCategories] = useState(['One Punch']);

    //como agregar un elemento a la lista de tipo array
    const onAddCategory = (newCategory) => {
      
        
      if(!categories.findIndex(category => category.toLowerCase() === newCategory.toLowerCase())) return;
        
        //ESTO DE ABAJO ES LO MISMO Q EL IF DE ARRIBA.
        // if(categories.includes(newCategory)){
        //   return
        // }
      
      //varias formas
      //FUNCION QUE HACE (nuevo elemento,spread operator);
        /*1*/ setCategories( [ newCategory ,...categories] );
        // /*2*/ setCategories( categ => [...categ, 'valorant'] );
    }

  return (

    <>

        <h1>GifExpertApp</h1>
        {/*aca le define una propiedad y le pone el valor de la funcion*/}
        <AddCategory 
        // setCategories={ setCategories }
        onNewCategory={(value) => onAddCategory(value)}
        />
      {/* {Listado de gifs} */}
        { 
        categories.map ((category) => (
            <GifGrid key={category} category={category} />
          ))
        }


    </>
  )
}
