import {
  VStack,
  Flex,
  Text
} from '@chakra-ui/react'
import { Header } from './Header'
import { ListLink } from './ListLinks'

export default function Home() {
  return (
    <Flex
      bg='brand.100'
      h='100vh'
      w='100vw'
      justify='center'
      placeItems='center'>
      <VStack spacing={12} >
        <Header />
        <ListLink />
      </VStack>
    </Flex>
  )
}