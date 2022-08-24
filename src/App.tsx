import {
  Box,
  VStack,
  Text,
  Image,
  Heading,
  Link,
  Button,
  Flex
} from '@chakra-ui/react'
import { LinkButton } from './components/LinkButton'
import { FaChessBishop, FaGithubAlt, FaInstagram, FaYoutube } from 'react-icons/fa'


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
        <VStack spacing={4} color='white' >
          <LinkButton icon={<FaYoutube />} name='YOUTUBE' href='https://youtube.com' />
          <LinkButton icon={<FaInstagram />} name='INSTAGRAM' href='https://youtube.com' />
          <LinkButton icon={<FaChessBishop />} name='WEBSITE' href='https://youtube.com' />
          <LinkButton icon={<FaGithubAlt />} name='GITHUB' href='https://youtube.com' />
        </VStack>
        <span>Created by João Gustavo "Bishop"</span>
      </VStack>
    </Flex>
  )
}