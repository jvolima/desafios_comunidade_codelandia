import { Box, Button, Flex, Heading, HStack, Image, Link, Text } from "@chakra-ui/react";

import altImage from "../../assets/altImage.svg"
import { LinkButton } from "./LinkButton";

interface ProjectCardProps {
  name: string;
  description: string;
  html_url: string;
}

export function ProjectCard({ name, description, html_url }: ProjectCardProps) {
  return (
    <Box 
      h="31.25rem" 
      w="100%" 
      borderRadius="8px" 
      border="1px solid #873EEF" 
      bgColor="gray.800" 
      p={["4", "6"]}
    >
      <Flex align="center" h="13.875rem" borderRadius="4px" justify="center" bgColor="gray.900">
        <Image src={altImage} alt="Imagem alternativa" />
      </Flex>
      <Heading 
        my="6"
        fontSize={["xl", "2xl" ]}
        fontWeight="500"
        lineHeight="8"
      >
        {name}
      </Heading>
      <Text
        my="6"
        fontSize={["md", "lg"]}
        fontWeight="500"
        color="gray.300" 
      >
        {description}
      </Text>

      <HStack spacing={["4", "6"]} mt="12" align="center">
        <LinkButton
          name="demo"
          bgColor="green.400"
          textColor="gray.900"
          bgColorHover="gray.300"
          href={"/"} 
        />

        <LinkButton
          name="github"
          bgColor="transparent"
          textColor="white"
          bgColorHover="purple.500" 
          borderColor="#04D361"
          href={html_url} 
        />
      </HStack>
    </Box>
  )
}