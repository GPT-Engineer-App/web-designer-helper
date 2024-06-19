import { Box, Button, FormControl, FormLabel, Input, Textarea, Heading, VStack } from "@chakra-ui/react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here
  };

  return (
    <Box p={4} bg="gray.50">
      <Heading as="h2" size="xl" mb={6} color="gray.800">Contact Us</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="name" isRequired>
            <FormLabel color="gray.800">Name</FormLabel>
            <Input name="name" value={formData.name} onChange={handleChange} bg="white" color="gray.800" />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel color="gray.800">Email</FormLabel>
            <Input type="email" name="email" value={formData.email} onChange={handleChange} bg="white" color="gray.800" />
          </FormControl>
          <FormControl id="message" isRequired>
            <FormLabel color="gray.800">Message</FormLabel>
            <Textarea name="message" value={formData.message} onChange={handleChange} bg="white" color="gray.800" />
          </FormControl>
          <Button type="submit" colorScheme="black" size="lg">Submit</Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Contact;