import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link as={RouterLink} to="/" color="white" fontSize="xl" fontWeight="bold">Business</Link>
        </Box>
        <Flex alignItems="center">
          <Link as={RouterLink} to="/merchandise" color="white" mr={4}>Merchandise</Link>
          <Link as={RouterLink} to="/contact" color="white">Contact</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;