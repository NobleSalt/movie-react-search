import { Box } from "@chakra-ui/react";

export default function Movie (props) {
    const { name } = props

    return (
        <Box bg='black' color='white' textTransform='capitalize' mr='5' p='5' borderRadius='2.5' w='200px'>
            {name.Title}
        </Box>
    )
}