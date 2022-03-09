import { ButtonProps, Flex, Link } from "@chakra-ui/react";

interface LinkButtonProps {
  name: string;
  textColor: string;
  bgColorHover: string;
  bgColor: string;
  borderColor?: string;
  href: string;
}

export function LinkButton({ name, textColor, bgColor, bgColorHover, borderColor, href }: LinkButtonProps) {
  return (
    <Link 
      maxWidth={[145, 165]}
      w="100%"
      _hover={{}}
      href={href}
      target="_blank"
    >
      <Flex 
        align="center" 
        justify="center"
        textTransform="uppercase"
        bgColor={bgColor}
        color={textColor}
        fontSize={["xs", "sm"]}
        fontWeight="bold"
        lineHeight="5"
        h="42"
        py="5"
        px={["2", "3"]}
        borderRadius="4px"
        border={borderColor && `1px solid ${borderColor}`}
        _hover={{
          bgColor: bgColorHover,
          transition: "0.3s",
          border: borderColor && `1px solid ${bgColor}`
        }}
      >
        {name}
      </Flex>
    </Link>
  )
}