import {
  Box,
  VStack,
  Text,
  Image,
  Heading,
  Flex
} from '@chakra-ui/react'
import { ListLink } from './components/ListLinks'

export default function App() {
  return (
    <Flex
      bg='brand.100'
      h='100vh'
      w='100vw'
      justify='center'
      placeItems='center'>
      <VStack spacing={12} >
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
        </VStack>
        <ListLink />
        <span>Created by João Gustavo "Bishop"</span>
      </VStack>
    </Flex>
  )
}