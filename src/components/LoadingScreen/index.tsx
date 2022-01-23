import { Flex, Spinner } from "@chakra-ui/react";

export default function LoadingScreen() {
  return (
    <Flex bg="blue.500" justify="center" align="center" w="full" h="100vh">
      <Spinner color="white" size="xl" />
    </Flex>
  );
}
