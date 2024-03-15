import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from '@chakra-ui/react';
import React from 'react';
interface AccordionProps {
    contentFaq: accordionGuris[];
}

export type accordionGuris = {
    title: string;
    subTitulo: string;
};

export const AccordionComponent: React.FC<AccordionProps> = props => {
    return (
        <>
            <Accordion>
                {props.contentFaq.map(function (faqResult: any, index: number) {
                    return <AccordionItem key={index}>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    {faqResult.title}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            {faqResult.subTitulo}
                        </AccordionPanel>
                    </AccordionItem>
                })}

            </Accordion>
        </>
    )
};