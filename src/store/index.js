import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ApiContext = createContext()



export default function ApiProvider({ children }) {
    const {api_key} = process.env

    const [search, setSearch] = useState('demo')
    const [isLoading, setIsLoading] = useState(false)
    const [movies, setMovies] = useState([])


    useEffect(() => {
        handleSearch()
    }, [search])

    const handleSearch = async () => {
        setIsLoading(true)
        console.log('Searching ...')
        await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=fdbee485`)
            .then(res => res.data)
            .then(response => {
                if (response.Search) {
                    setMovies(response.Search)
                    console.log(response.Search || 'none')
                    setIsLoading(false)
                    console.log('done ...')
                }
            })
            .catch(e => {
                throw Error(e)
            })
    }


    return (
        <ApiContext.Provider value={{ search, setSearch, movies, isLoading }}>
            {children}
        </ApiContext.Provider>
    )
}
