// Complete the Index page component here
// Use chakra-ui
import React from 'react';
import { Box, Button, Container, Heading, Input, Text, useToast } from "@chakra-ui/react";
import { FaFileUpload, FaMusic } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const [isConverted, setIsConverted] = React.useState(false);
  const [fileName, setFileName] = React.useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);

      setTimeout(() => {
        setIsConverted(true);
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

  const handleDownloadClick = () => {
    const element = document.createElement("a");
    const file = new Blob(["Simulated MP3 content"], { type: "audio/mpeg" });
    element.href = URL.createObjectURL(file);
    element.download = `${fileName}.mp3`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleUploadClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <Container centerContent p={8}>
      <Heading mb={6}>Audio to MP3 Converter</Heading>
      <Box textAlign="center" p={5} borderWidth="1px" borderRadius="lg" bg="gray.50">
        <Text fontSize="lg" mb={3}>
          Convert your audio files to MP3 format easily.
        </Text>
        <Input id="fileInput" type="file" accept="audio/*" onChange={handleFileChange} p={2} mb={3} />
        <Button leftIcon={<FaFileUpload />} colorScheme="blue" onClick={handleUploadClick} isDisabled={isConverted}>
          Upload Audio File
        </Button>
        {isConverted && (
          <Button leftIcon={<FaMusic />} colorScheme="green" ml={4} onClick={handleDownloadClick}>
            Download MP3
          </Button>
        )}
      </Box>
      <Box mt={10}>
        <Text fontSize="xs">Supported formats include WAV, AAC, and more.</Text>
      </Box>
    </Container>
  );
};

export default Index;
