import { ChakraProvider, Heading, Text, Box } from "@chakra-ui/react"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import { Header } from "./components/Header"
import { Projects } from "./components/Projects"
import { theme } from "./styles/theme"

const client = new QueryClient();

function App() {
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
            fontSize="4rem"
            lineHeight="5.25rem"
          >
            Projetos da comunidade Codelândia
          </Heading>
          <Text
            my="8"
            maxWidth={812}
            fontWeight="500"
            fontSize="2xl"
            lineHeight="10"
            color="gray.300"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis ligula, accumsan nec cursus in, eleifend sit amet dui.
          </Text>
        </Box>

        <Projects />
      </ChakraProvider>

      <ReactQueryDevtools/>
    </QueryClientProvider>
  )
}

export default App
