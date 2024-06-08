import { Box, Button, Container, Flex, Heading, HStack, Icon, Image, Text, VStack } from "@chakra-ui/react";
import { FaPlay, FaStar, FaExpand } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4} bg="#f8f8f8">
      <Flex direction="row" justify="space-between" mb={4}>
        <Box>
          <Heading size="lg">Consultation with Maria Garcia</Heading>
          <Text fontSize="sm" color="gray.500">04.06.2024</Text>
        </Box>
        <Box textAlign="right">
          <Text fontSize="sm" color="gray.500">Frame 1000003361</Text>
          <Button colorScheme="purple" size="sm" mt={2}>
            <Icon as={FaPlay} mr={2} /> START TRANSCRIPTION
          </Button>
        </Box>
      </Flex>

      <Box bg="white" p={4} borderRadius="md" mb={4}>
        <Heading size="md" mb={2}>AI Summary</Heading>
        <Box h="100px" bg="gray.100" borderRadius="md"></Box>
      </Box>

      <Box bg="white" p={4} borderRadius="md" mb={4}>
        <Flex justify="space-between" align="center" mb={2}>
          <Heading size="md">Notes</Heading>
          <Icon as={FaStar} color="purple.500" />
        </Flex>
        <Box h="150px" bg="gray.100" borderRadius="md"></Box>
      </Box>

      <Box bg="white" p={4} borderRadius="md" mb={4}>
        <Heading size="md" mb={2}>Transcriptions</Heading>
        <Flex align="center">
          <Icon as={FaPlay} mr={2} />
          <Text>Patient interview</Text>
        </Flex>
        <Box h="50px" bg="gray.100" borderRadius="md" mt={2}></Box>
      </Box>

      <Box bg="white" p={4} borderRadius="md" mb={4}>
        <Heading size="md" mb={2}>Wearable activity</Heading>
        <Text fontSize="sm" color="gray.500" mb={2}>Heart rate</Text>
        <Box h="100px" bg="gray.100" borderRadius="md"></Box>
      </Box>

      <Box bg="white" p={4} borderRadius="md">
        <Heading size="md" mb={2}>Related Files</Heading>
        <HStack spacing={4}>
          <Box bg="gray.100" p={4} borderRadius="md" textAlign="center">
            <Box h="50px" bg="gray.200" mb={2}></Box>
            <Text>Blood-test.pdf</Text>
            <Text fontSize="sm" color="gray.500">6.41 Mb</Text>
          </Box>
          <Box bg="gray.100" p={4} borderRadius="md" textAlign="center">
            <Box h="50px" bg="gray.200" mb={2}></Box>
            <Text>CT av thorax.dicom</Text>
            <Text fontSize="sm" color="gray.500">3.41 Mb</Text>
          </Box>
        </HStack>
      </Box>

      <Box position="absolute" top={4} right={4} w="250px" bg="white" p={4} borderRadius="md">
        <Flex align="center" mb={4}>
          <Box bg="gray.200" w="40px" h="40px" borderRadius="full" mr={2}></Box>
          <Box>
            <Text fontWeight="bold">Maria Garcia</Text>
            <Text fontSize="sm" color="gray.500">42 yrs, female</Text>
          </Box>
        </Flex>
        <Box mb={4}>
          <Text fontSize="sm" color="gray.500" mb={2}>Diabetic</Text>
          <Text fontSize="sm" color="gray.500">Had surgery</Text>
        </Box>
        <Box mb={4}>
          <Heading size="sm" mb={2}>Activity trends</Heading>
          <Box h="50px" bg="gray.100" borderRadius="md"></Box>
        </Box>
        <Box>
          <Heading size="sm" mb={2}>Latest</Heading>
          <Text fontSize="sm" color="gray.500" mb={2}>Blood test - 01.03.2024</Text>
          <Box h="50px" bg="gray.100" borderRadius="md"></Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Index;