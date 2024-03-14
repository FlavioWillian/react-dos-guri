import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from '@chakra-ui/react';
import React from 'react';
interface AccordionProps{
    title?: string;
    subTitulo?: string;
}

export const AccordionComponent: React.FC<AccordionProps> = props => {
    return (
        <>
        <Accordion>
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                        {props.title}
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    {props.subTitulo}
                </AccordionPanel>
            </AccordionItem>
            </Accordion>
        </>
    )
};