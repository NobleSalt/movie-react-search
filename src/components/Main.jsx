import { Box } from "@chakra-ui/react";
import Search from "./Search";
import CategoryList from "./CategoryList";

export default function Main() {

    return (
        <Box p='2rem'>
            <Search />
            <br />
            <CategoryList />
        </Box>
    )
}