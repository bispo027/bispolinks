import { Text, VStack } from "@chakra-ui/react";
import { LinkButton } from "./LinkButton";
import { FaChessBishop, FaGithubAlt, FaInstagram, FaYoutube } from 'react-icons/fa'

export function ListLink() {
  return (
    <VStack spacing={4} color='white' >
      <LinkButton icon={<FaYoutube />} name='YOUTUBE' href='https://youtube.com' />
      <LinkButton icon={<FaInstagram />} name='INSTAGRAM' href='https://youtube.com' />
      <LinkButton icon={<FaChessBishop />} name='WEBSITE' href='https://youtube.com' />
      <LinkButton icon={<FaGithubAlt />} name='GITHUB' href='https://youtube.com' />
      <Text color='brand.400'>Created by João Gustavo "Bishop"</Text>
    </VStack>
  )
}