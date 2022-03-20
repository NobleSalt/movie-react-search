import { Box, Flex, Heading, Link } from "@chakra-ui/react";


export default function NavBar() {

    return (
        <Link href="/">
            <Flex p='1.5' justifyContent={{
                base: 'center',
                md: 'flex-start'
            }} bg='#292929' color='white' fontFamily='Times New Roman'>
                <Box p='2'>
                    <Heading d='flex' justifySelf='center' p='1' size='sm' border='1px solid #FFFFFF'>MyTestApp</Heading>
                </Box>
            </Flex>
        </Link>
    )
}