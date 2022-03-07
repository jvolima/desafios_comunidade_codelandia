import { Button, chakra, Flex, Heading, HStack, Link } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex 
      as="header" 
      maxWidth={1120}
      w="100%"
      mx="auto"
      mt="16"
      align="center" 
      justify="space-between"
    >
      <Heading 
        textTransform="uppercase"
        fontSize="2rem"
        fontFamily="Josefin Sans"
        lineHeight="8"
      >
        codelân<chakra.span color="purple.500">{' { ) '}</chakra.span>ia
      </Heading>

      <HStack spacing="12">
        <Link href="https://github.com/jvolima">
          <Heading 
            textTransform="uppercase"
            fontFamily="DM Sans"
            fontSize="1.0625rem"
            lineHeight="1.375rem"
            letterSpacing="0.01em"
          >
            meu github
          </Heading>
        </Link>
        <Button
          bg="transparent"
          border="1px solid #873EFF"
          borderRadius="6px"
          px="5"
          py="7"
          _hover={{
            transition: "0.3s",
            bg: "purple.500"
          }}
        >
          <Heading 
            textTransform="uppercase"
            fontFamily="DM Sans"
            fontSize="0.9375rem"
            lineHeight="shorter"
          >
            entrar na comunidade
          </Heading>
        </Button>
      </HStack>
    </Flex>
  )
}