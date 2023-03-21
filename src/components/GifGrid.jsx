import { useEffect, useState } from "react";

// import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";


export const GifGrid = ({category}) => {

    const { images, isLoading } = useFetchGifs(category);
    
    return (
    <>
        <h3>{category}</h3>
        {/*funcionalidad para que aparezca el cargando con un if ternario*/}
        {
            isLoading && ( <h2> Cargando...</h2>)
        }
        <div className="card-grid">
            {
                images.map ( (image) => (
                    <GifItem key={image.id}

                            //esto es lo mismo:
                            // title={image.title}
                            // url={image.url}

                            //que esto
                            { ...image }
                    />
                ) )
            }
        </div>


    </>
    )
}
