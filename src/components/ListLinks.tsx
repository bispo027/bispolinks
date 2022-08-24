import { Text, VStack } from "@chakra-ui/react";
import { LinkButton } from "./LinkButton";
import { FaChessBishop, FaGithubAlt, FaInstagram, FaYoutube } from 'react-icons/fa'

export function ListLink() {
  return (
    <VStack spacing={4} color='white' >
      <LinkButton icon={<FaInstagram />} name='INSTAGRAM' href='https://instagram.com/jgsbispo' />
      <LinkButton icon={<FaChessBishop />} name='WEBSITE' href='https://bispo.vercel.app/' />
      <LinkButton icon={<FaGithubAlt />} name='GITHUB' href='https://github.com/jgbispo' />
      <LinkButton icon={<FaYoutube />} name='YOUTUBE' href='https://youtube.com' />
      <Text color='brand.400'>Created by João Gustavo "Bishop"</Text>
    </VStack>
  )
}