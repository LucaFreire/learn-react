import { useCallback, useState } from "react";
import axios from "axios";
import CountryCard from "../../components/CountryCard";
import './style.css';

export default function Countries() {
    const [country, setCountry] = useState('');
    const [countryName, setCountryName] = useState('');
    const [capitalName, setCapitalName] = useState('');
    const [languagesName, setLanguagesName] = useState('');
    const [flagPng, setFlagPng] = useState('');
    const [subregion, setSubregion] = useState('');
    const [currencyName, setCurrencyName] = useState('');

    const handleCountryMusic = useCallback(async () => {

        if (!country)
            return;

        const res = await axios.get(`https://restcountries.com/v3.1/name/${country}`);
        clearInput();

        const { altSpellings, currencies, capital, subregion, languages, flags } = res.data[0];

        const currency = Object.values(currencies);
        setCurrencyName(currency[0].name);
        setCapitalName(capital[0]);
        setCountryName(altSpellings[1]);
        setSubregion(subregion);
        setLanguagesName(Object.values(languages));
        setFlagPng(flags.png);
    });

    function clearInput() {
        setCountry('');
    }

    return (<>
        <div className="main-countries-api">
            <div className="inputs-countries-api">
                <input type="text" placeholder="Country Name" value={country} onChange={(e) => setCountry(e.target.value)}></input>
                <button id="post-countries-api" onClick={() => handleCountryMusic()}>Search</button>
                <CountryCard capital={capitalName} currency={currencyName} flag={flagPng} languages={languagesName} name={countryName} subregion={subregion}></CountryCard>
            </div>
        </div>
    </>);
}