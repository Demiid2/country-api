import React from "react";

function Selector() {
    let selection = document.getElementById("countries");
    let seleccionado;
    let pais;
    const [countries, setCountries] = React.useState([])
    React.useEffect(() => {
        getCountries();
    }, []);
    const getCountries = () => {
        fetch('https://restcountries.com/v2/lang/es')
            .then(res => {
                return res.json()
            })
            .then(post => {
                setCountries(post)
            })
    }
    function seleccionar() {
        seleccionado = selection.options[selection.selectedIndex].value;
        console.log(seleccionado);
        pais = seleccionado;
        selectedCountry(pais);
    }
    const [primerPais, setPrimerPais] = React.useState([])
    const selectedCountry = (pais) => {
        fetch(`https://restcountries.com/v2/name/${pais}`)
            .then(res => {
                console.log(await res.text())
                // return res.json()
            })
            .then(post => {
                console.log(post)
                setPrimerPais(post)
            })
    }
    return ( <div >
        <select 
        id = "countries"
        onChange = {seleccionar} > {
            countries.map(item => ( 
            <option 
            key = {item.alpha2Code}
                value = {item.nativeName} > {item.nativeName} 
                </option>
            ))

        } 
        </select> 
        <div>
        {
                     primerPais.map(pais1 => (
                     <div key={pais1.alpha2Code}>   
                        <h1>{pais1.name}</h1>
                        <img src={pais1.flag} />
                     </div>
                     
                     ))
                     
                 }
        </div>
        </div>
    )
}
export default Selector;