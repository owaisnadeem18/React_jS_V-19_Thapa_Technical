import React, { useEffect, useState } from 'react'
import { Country , City , State } from 'country-state-city'


const CountryData = () => {

    const [Countries , setCountries] = useState([])
    const [SelectedCountries , SetSelectedCountries] = useState("")

    useEffect(() => {
        const Allcountries = Country.getAllCountries()
        setCountries(Allcountries)
    } , [])

    const CountryChangeFunc = (event) => {
        SetSelectedCountries(event.target.value)
        console.log("Selected country is => " , SetSelectedCountries)
    }

  return (
    <div>
        <h3>
            Select and Filter Any Country | Mini project of react Js Use State
        </h3>

        <select name="" id="" onChange={CountryChangeFunc} >
            <option value="">
            --- Select Any Country ----
            </option>
                {Countries.map((country) => (

                    
                    <option value= {country.name}  key={country.isoCode} >
                        {country.name}
                    </option>
                ))}
        </select>

        <h3>
            The Selected Country is: 
        </h3>

        <h2 style={{backgroundColor: "gray", padding : "10px" , borderRadius: "10px", color: "white" }} > 
            {SelectedCountries}
        </h2>

    </div>
  )
}

export default CountryData
