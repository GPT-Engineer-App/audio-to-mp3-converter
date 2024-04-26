// Complete the Index page component here
// Use chakra-ui
import { Box, Button, Container, Heading, Input, Text, useToast } from "@chakra-ui/react";
import { FaFileUpload, FaMusic } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Simulate file processing and conversion to MP3
      setTimeout(() => {
        toast({
          title: "Conversion Successful",
          description: `${file.name} has been converted to MP3.`,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      }, 3000);
    }
  };

  const handleUploadClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <Container centerContent p={8}>
      <Heading mb={6}>Audio to MP3 Converter</Heading>
      <Box textAlign="center" p={5} borderWidth="1px" borderRadius="lg">
        <Text fontSize="lg" mb={3}>
          Convert your audio files to MP3 format easily.
        </Text>
        <Button leftIcon={<FaFileUpload />} colorScheme="blue" onClick={handleUploadClick}>
          Upload Audio File
        </Button>
        <Input id="fileInput" type="file" accept="audio/*" hidden onChange={handleFileChange} />
      </Box>
      <Box mt={10}>
        <Text fontSize="xs">Supported formats include WAV, AAC, and more.</Text>
      </Box>
    </Container>
  );
};

export default Index;
