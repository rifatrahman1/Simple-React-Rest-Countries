import './Country.css'
const Country = ({country}) => {
    console.log(country);
    const {name, flags} = country;
    return (
        <div className='country'>
            <h1>Name: {name?.common}</h1>
            <br />
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;