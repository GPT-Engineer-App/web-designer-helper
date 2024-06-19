import { Container, Text, VStack, Heading, Button, SimpleGrid, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" minHeight="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Image src="/images/new-logo.png" alt="Noah's Ark Fishing Logo" boxSize="150px" mb={4} />
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" color="brand.400">Welcome to Noah's Ark Fishing</Heading>
        <Text fontSize="xl" color="brand.400">Explore our merchandise and get in touch with us!</Text>
        <Button as={Link} to="/merchandise" bg="brand.900" color="brand.400" size="lg">Shop Merchandise</Button>
        <Button as={Link} to="/contact" bg="brand.900" color="brand.400" size="lg">Contact Us</Button>
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