import { chakra, Flex, Heading, HStack, Icon, Link, useBreakpointValue } from "@chakra-ui/react";
import { FaGithub, FaDiscord } from "react-icons/fa"

export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true
  })

  return (
    <Flex 
      as="header" 
      maxWidth={1120}
      w="100%"
      mx="auto"
      px="4"
      mt="16"
      align="center" 
      justify="space-between"
    >
      <Heading 
        textTransform="uppercase"
        fontSize={["1.5rem", "1.5rem", "1.75rem", "2rem"]}
        fontFamily="Josefin Sans"
        lineHeight="8"
      >
        codelân<chakra.span color="purple.500">{' { ) '}</chakra.span>ia
      </Heading>

      {
        isWideVersion ?
          <HStack spacing={["11", "12"]}>
            <Link href="https://github.com/jvolima" target="_blank">
              <Heading 
                textTransform="uppercase"
                fontFamily="DM Sans"
                fontSize={["0.75rem", "1rem", "1rem", "1.0625rem"]}
                lineHeight="1.375rem"
                letterSpacing="0.01em"
              >
                meu github
              </Heading>
            </Link>
            <Link
              href=""
              bg="transparent"
              border="1px solid #873EFF"
              borderRadius="6px"
              px={["4", "5"]}
              py={["6", "5"]}
              _hover={{
                transition: "0.3s",
                bg: "purple.500"
              }}
            >
              <Heading 
                textTransform="uppercase"
                fontFamily="DM Sans"
                fontSize={["0.625rem", "0.8rem", "0.8rem", "0.9375rem"]}
                lineHeight="shorter"
              >
                entrar na comunidade
              </Heading>
            </Link>
          </HStack>
        :
          <HStack spacing={["5", "6", "7"]}>
            <Link href="https://github.com/jvolima" target="_blank">
              <Icon as={FaGithub} fontSize={["26", "30"]}/>
            </Link>
            <Link href="" target="_blank">
              <Icon as={FaDiscord} fontSize={["26", "30"]}/>
            </Link>
          </HStack>
      }
    </Flex>
  )
}