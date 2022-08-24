import { Heading, VStack, Text } from "@chakra-ui/react";

export function TextHeader() {
  return (
    <VStack spacing={2}>
      <Heading
        fontSize='32px'
        fontWeight='semibold'
        color='brand.400'>
        João Gustavo Bispo</Heading>
      <Text
        fontSize='18px'
        fontWeight='regular'
        color='brand.400'>
        @jgsbispo / @jgbispo
      </Text>
    </VStack>
  )
}