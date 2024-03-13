import { Box } from '@chakra-ui/react';
import React from 'react';
interface BannerProps{
    title?:string;
    image?:string;
    alt?:string;
    Size: string;
}

export const Banner: React.FC<BannerProps> = props => {
    return (
        <Box boxSize={props.Size} className="banner">
            <img src={props.image} alt={props.alt} />
            <h1>{props.title}</h1>
        </Box>
    );
}

