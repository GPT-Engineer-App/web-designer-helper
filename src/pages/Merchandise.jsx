import { Box, Heading, SimpleGrid, Image, Text, VStack } from "@chakra-ui/react";

const Merchandise = () => {
  const products = [
    { id: 1, name: "Product 1", image: "/images/product1.jpg", description: "Description for product 1" },
    { id: 2, name: "Product 2", image: "/images/product2.jpg", description: "Description for product 2" },
    { id: 3, name: "Product 3", image: "/images/product3.jpg", description: "Description for product 3" },
  ];

  return (
    <Box p={4}>
      <Heading as="h2" size="xl" mb={6}>Our Merchandise</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {products.map(product => (
          <Box key={product.id} borderWidth="1px" borderColor="brand.900" borderRadius="lg" overflow="hidden">
            <Image src={product.image} alt={product.name} />
            <VStack p={4} align="start">
              <Heading as="h3" size="md">{product.name}</Heading>
              <Text>{product.description}</Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Merchandise;