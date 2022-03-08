import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

import altImage from "../../assets/altImage.svg"

interface ProjectCardProps {
  name: string;
  description: string;
  url: string;
}

export function ProjectCard({ name, description, url }: ProjectCardProps) {
  return (
    <Box 
      h="31.25rem" 
      w="100%" 
      borderRadius="8px" 
      border="1px solid #873EEF" 
      bgColor="gray.800" 
      p="6"
    >
      <Flex align="center" h="13.875rem" borderRadius="4px" justify="center" bgColor="gray.900">
        <Image src={altImage} alt="Imagem alternativa" />
      </Flex>
      <Heading 
        my="6"
        fontSize="2xl" 
        fontWeight="500"
        lineHeight="8"
      >
        {name}
      </Heading>
      <Text
        my="6"
        fontSize="lg"
        fontWeight="500"
        color="gray.300" 
      >
        {description}
      </Text>
    </Box>
  )
}