import { ChakraProvider, Heading, Text, Box, Flex, HStack, useBreakpointValue } from "@chakra-ui/react"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import { Header } from "./components/Header"
import { Projects } from "./components/Projects"
import { theme } from "./styles/theme"

const client = new QueryClient();

function App() {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true
  })

  return (
    <QueryClientProvider client={client}>
      <ChakraProvider theme={theme}>
        <Header />

        <Box maxWidth={1120} px="4" w="100%" my="24" mx="auto">
          <Heading 
            textTransform="uppercase"
            fontSize="2xl"
            color="green.400"
            letterSpacing="wider"
            lineHeight="8"
          >
            comunidade dev
          </Heading>
          <Heading
            my="3"
            maxWidth={810}
            fontWeight="600"
            fontSize={["3rem", "3.5rem", "3.75rem", "4rem"]}
            lineHeight="5.25rem"
          >
            Projetos da comunidade Codelândia
          </Heading>
          <Text
            my="8"
            maxWidth={812}
            fontWeight="500"
            fontSize={["md", "lg", "xl", "2xl"]}
            lineHeight="10"
            color="gray.300"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis ligula, accumsan nec cursus in, eleifend sit amet dui.
          </Text>
        </Box>

        <Projects />

        <Flex 
          maxWidth={1120} 
          w="100%" 
          mx="auto"
          mt={["14", "24", "36"]} 
          mb={["7", "12"]}
          px="4"
          as="footer" 
          align="center" 
          justify="space-between"
        >
          <Text
            fontFamily="Josefin Sans"
            fontWeight="bold"
            fontSize={["3xl", "4xl", "5xl"]}
            lineHeight="3rem"
            color="purple.500"
          >
            {`{ )`}
          </Text>
          <HStack spacing={["6", "8", "12"]}>
            <Text
              fontFamily="IBM Plex Mono"
              fontSize={["sm", "md", "lg"]}
              lineHeight="7"
              color="gray.300"
            >
              © 2022 - João Vitor Lima
            </Text>
            <Text
              fontFamily="IBM Plex Mono"
              fontSize={["sm", "md", "lg"]}
              lineHeight="7"
              color="gray.300"
            >
              Codelândia
            </Text>
          </HStack>
        </Flex>
      </ChakraProvider>

      <ReactQueryDevtools/>
    </QueryClientProvider>
  )
}

export default App
