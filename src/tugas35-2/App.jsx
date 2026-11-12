// import { useEffect, useState } from "react";
import "../App.css";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

export default function App() {
    // const [bulbasaur, setBulbasaur] = useState({});

    // useEffect(() => {
    // fetch("https://pokeapi.co/api/v2/pokemon/1")
    //     .then((res) => res.json())
    //     .then((res) => setBulbasaur(res));
    // }, []);

    // GraphQL
    const pokemonQueryByName = gql`
        query pokemon($name: String){
            pokemon(name: $name) {
                number
                name
                image
            }
        }
    `
    const { data: pokemonData, error, loading, refetch } = useQuery(pokemonQueryByName, {
        variables: {
            name: "bulbasaur"
        }
    });


    return (
    <div className="App">
        <h1>Halo, Selamat Datang di Jayjay API</h1>
        <h3>Kali ini kita akan menampilkan Bulbasaur</h3>
        <hr />
        {error ? <div>Terjadi Error!</div> : loading ? <div>Loading . . .</div> : (
            <>
                <h1 style={{ textTransform: "capitalize" }}>{pokemonData.pokemon.name}</h1>
                <img
                src={pokemonData.pokemon.image}
                alt={pokemonData.pokemon.number}
                />
                <br /><br />
                
                <button onClick={() => refetch({ name: "pikachu" })}>Refresh</button>
            </>
        )}
        
    </div>
    );
}
