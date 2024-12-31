import { useState } from 'react';
import './Country.css'
const Country = ({country, handle_visit_countries}) => {
    console.log(handle_visit_countries);
    const {name, flags, population,region, area} = country;
    const [visited, setVisited] = useState(false);
    const handle_visited = () => {
        setVisited(!visited);
    }
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h2>Name: {name?.common}</h2>
            <br />
            <img src={flags.png} alt="" />
            <h3>Population: {population}</h3>
            <p>Area: {area}</p>
            <p>Region: {region}</p>
            <br />
            <button>Mark Visited</button>
            <br />
            <br />
            <button onClick={handle_visited} disabled={visited}>{visited? 'Visited' : 'Going Visited'}</button>
            {
                visited && 'Yes i already visited...'
            }
        </div>
    );
};

export default Country;