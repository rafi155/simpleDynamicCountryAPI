const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries =>{
    // for(const country of countries){
    //     console.log(country)
    // }
    const sectionContainer = document.getElementById('all-countries');

    countries.forEach(country =>{
        // console.log(country)
        const countryDiv = document.createElement('div')
        countryDiv.classList.add('country-data');

        countryDiv.innerHTML=`
        <h3>Name: ${country.name.common}</h3>
        <p>Capital: ${country.capital ? country.capital[0] : 'no capital'} </p>
        <button onclick="displayCountryInfo('${country.cca2}')">Detais</button>
        `;

        sectionContainer.appendChild(countryDiv);
    })
}
const displayCountryInfo = code =>{
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
    .then(res => res.json())
    .then(data => showCountryInfo(data[0]));
}

const showCountryInfo = country =>{
    const infoContainer  = document.getElementById('country-info');

    infoContainer.innerHTML =  `
    <h3>Country-name: ${country.name.common}</h3>
    <img src="${country.flags.png}">
    `
}
loadCountries()