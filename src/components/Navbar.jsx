import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="brand.900" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link as={RouterLink} to="/" color="brand.400" fontSize="xl" fontWeight="bold">Noah's Ark Fishing</Link>
        </Box>
        <Flex alignItems="center">
          <Link as={RouterLink} to="/merchandise" color="brand.400" mr={4}>Merchandise</Link>
          <Link as={RouterLink} to="/contact" color="brand.400">Contact</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;