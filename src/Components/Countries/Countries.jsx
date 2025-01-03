import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visit_countries, set_visit_countries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);

    const handle_visit_countries = (country) => {
        console.log('add to your visit country');
        console.log(country);
    }

    return (
        <div>
            <h3>Countries {countries.length}</h3>
            <div className="country_container">
                {
                    countries.map(country => <Country key={country.cca3} handle_visit_countries={handle_visit_countries} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;