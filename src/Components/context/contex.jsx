import { createContext } from "react";
import { useEffect, useState } from "react";

export const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {

    const [pokemonData, setPokemonData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [offset, setOffset] = useState(0);
    const limit = 21;
    const [page, setPage] = useState(0)
    const [searchValue, setSearchValue] = useState("")
    const FetchPokemon = async () => {
        try {
            setIsLoading(true);
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
            const data = await res.json();

            const detailData = await Promise.all(
                data.results.map(async (currPokemon) => {
                    const response = await fetch(currPokemon.url);
                    return await response.json();
                })
            );

            setPokemonData(detailData);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        FetchPokemon();
    }, [offset]);

    const handleNext = () => {
        const newPage = page + 1;
        setPage(newPage);
        setOffset(prev => prev + limit);
    };

    const handlePrev = () => {
        const newPage = page - 1;
        setPage(newPage);
        if (offset > 0) {
            setOffset(prev => prev - limit);
        }
    };
    useEffect(() => {
        const timerId = setTimeout(() => {
            // console.log(pokemonData[0].name);
            
            const searchResult = pokemonData.find((pokemon)=> pokemon.name.toLowerCase() === searchValue.toLowerCase())
            console.log([searchResult]);
            
            if(searchResult!=null)
                setPokemonData([searchResult])
        },2000)
        return () => clearTimeout(timerId);
    }, [searchValue])

    const searchCharacter = (e) => {
        setSearchValue(e.target.value)
    }
    const contextValue = {
        pokemonData,
        isLoading,
        offset,
        page,
        searchValue,
        setSearchValue,
        handleNext,
        handlePrev,
        searchCharacter,
        totalPages: Math.ceil(1302 / limit),
        limit
    }

    return (
        <PokemonContext.Provider value={contextValue}>
            {children}
        </PokemonContext.Provider>
    );
}

export default PokemonProvider;