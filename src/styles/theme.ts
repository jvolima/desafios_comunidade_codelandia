import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  colors: {
    gray: {
      "50": "#F9F9F9",
      "300": "#AEAEAE",
      "800": "#171228",
      "900": "#0E091B"
    },
    purple: {
      "500": "#873EFF"
    },
    green: {
      "400": "#04D361"
    }
  },
  fonts: {
    heading: "IBM Plex Mono",
    body: "DM Sans"
  },
  styles: {
    global: {
      body: {
        bg: "gray.900",
        color: "gray.50",
      }
    }
  }
})