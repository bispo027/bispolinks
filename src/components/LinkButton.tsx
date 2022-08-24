import { Button, Link } from "@chakra-ui/react";
import {} from 'react-icons/ri'

interface LinkProps {
  href: string;
  name: string;
  icon: React.ReactElement;
}

export function LinkButton(props: LinkProps) {
  return (
    <Link href={props.href} target='_blank'>
      <Button
        leftIcon={props.icon}
        size='lg'
        w='300px'
        bg='brand.300'>
        {props.name}
      </Button>
    </Link>
  );
}