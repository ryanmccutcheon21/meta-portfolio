import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
    return (
        <>
            <Heading>Project</Heading>
            <HStack>
                <Image src={imageSrc} alt={description} />
                <VStack>
                    <p>{title}:</p>
                    <p>{description}</p>
                </VStack>
            </HStack>
        </>
    );
};

export default Card;