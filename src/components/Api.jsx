import React, { useState, useEffect} from "react";

const Api = () =>{
        const [countries, setCountries] = React.useState([]) 
          React.useEffect(() => {
     obtenerDatos()
}, [])
    const obtenerDatos = async () => {
        const data = await fetch('https://restcountries.com/v2/lang/es')
        const res = await data.json()
        setCountries(res)
    }
        return(
            <div>
             <ul>
                 {
                     countries.map(item => (
                     <li key={item.alpha2Code}>   
                        {item.nativeName}- {item.alpha2Code}
                        <img src={item.flags.png} alt={item.name}  />   
                        <h2>idioma hablado {item.languages[0].nativeName}</h2>     
                        <h2>cantidad de poblacion: {item.population}</h2>
                     </li>
                     
                     ))
                     
                 }
             </ul>
            </div>
        )
};

export default Api;