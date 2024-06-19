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
    <Box p={4}>
      <Heading as="h2" size="xl" mb={6}>Contact Us</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input name="name" value={formData.name} onChange={handleChange} />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" name="email" value={formData.email} onChange={handleChange} />
          </FormControl>
          <FormControl id="message" isRequired>
            <FormLabel>Message</FormLabel>
            <Textarea name="message" value={formData.message} onChange={handleChange} />
          </FormControl>
          <Button type="submit" colorScheme="teal" size="lg">Submit</Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Contact;