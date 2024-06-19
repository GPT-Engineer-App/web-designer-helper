import { Container, Text, VStack, Heading, Button, SimpleGrid, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Noah's Ark Fishing</Heading>
        <Text fontSize="xl">Explore our merchandise and get in touch with us!</Text>
        <Button as={Link} to="/merchandise" colorScheme="teal" size="lg">Shop Merchandise</Button>
        <Button as={Link} to="/contact" colorScheme="teal" size="lg">Contact Us</Button>
      </VStack>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={10}>
        <Image src="/images/fishing1.jpg" alt="Fishing at sunset" />
        <Image src="/images/fishing2.jpg" alt="Fishing boat on calm sea" />
        <Image src="/images/fishing3.jpg" alt="Fisherman with a big catch" />
      </SimpleGrid>
    </Container>
  );
};

export default Index;