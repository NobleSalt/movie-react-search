import { Box, Input } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { ApiContext } from "../store";

export default function Search() {
    const { search, setSearch, isLoading } = useContext(ApiContext)

    useEffect(() => {

    }, [search])

    return (
        <Box>
            Search: {search} {isLoading ? 'searching ...': ''}
            <Input border='.25px solid black' outline='.25px solid black' onChange={(e) => setSearch(e.target.value)} />
        </Box>
    )
}
