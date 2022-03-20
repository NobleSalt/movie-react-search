import { Box } from "@chakra-ui/react";
import HeroImage from '../assets/hero.png'


export default function Hero() {

    return (
        <div>
            <Box bgImage={HeroImage} bgSize='cover' color='white' h='300px' p='3.5rem' lineHeight='4rem' fontSize='3rem' fontWeight='bold'>
                Watch
                <br />
                Something
                <br />
                incredible.
            </Box>
        </div>
    )
}
