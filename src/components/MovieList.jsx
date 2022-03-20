import { Flex } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"
import { ApiContext } from "../store"
import Movie from "./Movie"

export default function MovieList() {
    const [movieList, setMovieList] = useState([])

    const { search, movies, isLoading } = useContext(ApiContext)

    useEffect(() => {
        setMovieList(movies)
    }, [search, movies])

    function get_items() {
        if (isLoading) {
            return <>
                'Nothing to display'
            </>
        } else {
            return <>
                <Flex
                    css={{
                        "&::-webkit-scrollbar": {
                            width: "1px",
                        },
                        "&::-webkit-scrollbar-track": {
                            width: "1px",
                        },
                        "&::-webkit-scrollbar-thumb": {
                            borderRadius: "1px",
                        },
                    }}
                    overflowX="auto"
                    // maxHeight="200px"
                    scrollBehavior='smooth'>
                    {movieList?.map(movie => (
                        <Movie key={movieList.indexOf(movie)} name={movie} />
                    ))}
                </Flex>
            </>
        }
    }

    return get_items()

}
