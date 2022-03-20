import { Box } from "@chakra-ui/react";
import MovieList from "./MovieList";

export default function Category(props) {
    const { cat_name } = props

    return (
        <Box textTransform='capitalize'>
            {cat_name}
            <br />
            <MovieList/>
        </Box>
    )
}