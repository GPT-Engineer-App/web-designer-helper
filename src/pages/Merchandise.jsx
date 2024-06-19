import { Box, Heading, SimpleGrid, Image, Text, VStack, Input, InputGroup, InputLeftElement, Icon } from "@chakra-ui/react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Merchandise = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const products = [
    { id: 1, name: "Product 1", image: "/images/product1.jpg", description: "Description for product 1" },
    { id: 2, name: "Product 2", image: "/images/product2.jpg", description: "Description for product 2" },
    { id: 3, name: "Product 3", image: "/images/product3.jpg", description: "Description for product 3" },
  ];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery) || product.description.toLowerCase().includes(searchQuery)
  );

  return (
    <Box p={4}>
      <Heading as="h2" size="xl" mb={6} color="brand.400">Our Merchandise</Heading>
      <InputGroup mb={6}>
        <InputLeftElement pointerEvents="none">
          <Icon as={FaSearch} color="brand.600" />
        </InputLeftElement>
        <Input
          type="text"
          placeholder="Search products"
          value={searchQuery}
          onChange={handleSearchChange}
          bg="brand.500"
          color="brand.900"
        />
      </InputGroup>
      
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {filteredProducts.map(product => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" bg="brand.500">
            <Image src={product.image} alt={product.name} />
            <VStack p={4} align="start">
              <Heading as="h3" size="md" color="brand.900">{product.name}</Heading>
              <Text color="brand.900">{product.description}</Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Merchandise;