import { Container, Text, VStack, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Our Business</Heading>
        <Text fontSize="xl">Explore our merchandise and get in touch with us!</Text>
        <Button as={Link} to="/merchandise" colorScheme="teal" size="lg">Shop Merchandise</Button>
        <Button as={Link} to="/contact" colorScheme="teal" size="lg">Contact Us</Button>
      </VStack>
    </Container>
  );
};

export default Index;