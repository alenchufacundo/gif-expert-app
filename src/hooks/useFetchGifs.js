import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


//como crear un custom hook
export const useFetchGifs = (category) => {
    
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    //funcion asincrona para traer las imagenes
    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false)
    }

     //useEffect
            //2 argumentos
    //useEffect (funcion(callback), dependencias []) 
    useEffect (  () => {
        getImages();
    },[]);


    return {
        images,
        isLoading,
    }

}
