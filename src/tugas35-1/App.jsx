import { useEffect, useState } from "react";
import axios from "axios";
import useSWR from "swr";
import "../App.css";

// SWR menggunakan Axios object
const fetcher = (url) => axios.get(url).then(res => res.data);

export default function App() {
    const [bulbasaur, setBulbasaur] = useState({});
    const [loading, setLoading] = useState(true);
    const [isError, setError] = useState(null);

    useEffect(() => {
    // fetch("https://pokeapi.co/api/v2/pokemon/1")
    //   .then((res) => res.json())
    //   .then((res) => setBulbasaur(res));

    // Axios
    axios.get("https://pokeapi.co/api/v2/pokemon/1")
        .then(res => {
            setBulbasaur(res.data);
            setLoading(false);
        })
        .catch(err => {
            setError(err);
        })
    }, []);

    // SWR
    const {data, error, isLoading} = useSWR("https://pokeapi.co/api/v2/pokemon/1", fetcher);


    return (
    <div className="App">
        <h1>Halo, Selamat Datang di Jayjay API</h1>
        <h3>Kali ini kita akan menampilkan Bulbasaur</h3>
        <hr />
        
        <h3 className="title">Dengan Axios</h3>
        {isError ? (<div>Terjadi Error</div>) : loading ? (<div>Loading. . .</div>) : (
        <>
            <h1 style={{ textTransform: "capitalize" }}>{bulbasaur?.name}</h1>
            <img
                src={bulbasaur?.sprites?.other["official-artwork"].front_default}
                alt={bulbasaur?.name}
            />
        </>
        )}
        <hr />

        <h3 className="title">Dengan SWR</h3>
        {error ? (<div>Terjadi Error</div>) : isLoading ? (<div>Loading. . .</div>) : (
        <>
            <h1 style={{ textTransform: "capitalize" }}>{data?.name}</h1>
            <img
                src={data?.sprites?.other["official-artwork"].front_default}
                alt={data?.name}
            />
        </>
        )}
    </div>
    );
}
