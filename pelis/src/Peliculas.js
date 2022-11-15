import React from 'react';
import Pelis from './peliculas.json'

export default function Cuerpo(){
    return ( 
        <div className='caja'> 
            <div className='cajita'> 
                {
                    Pelis.map ( (peli,key) => {
                        return(
                            <div className='box' key={peli.id}> 
                                <img src={peli.portada} alt={peli.nombre} className="portada"/>
                                <h4>
                                    {peli.nombre}
                                </h4>
                            </div>
                        )
                    })
                }
            </div>
        </div>
     );
}
  