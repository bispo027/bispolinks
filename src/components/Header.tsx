import { VStack, Image, Heading, Text } from "@chakra-ui/react";
import { TextHeader } from "./TextHeader";

export function Header() {
  return (
    <VStack spacing={4}>
      <Image
        borderRadius='full'
        css={{
          border: '4px solid #4263EB',
        }}
        boxSize='150px'
        src='https://github.com/jgbispo.png'
        alt='João G. Bispo'
      />
      <TextHeader />
    </VStack>
  )
}