import { ChakraProvider, Heading, Text } from "@chakra-ui/react"
import { Header } from "./components/Header"
import { theme } from "./styles/theme"

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
    </ChakraProvider>
  )
}

export default App
