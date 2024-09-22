import { Text } from "@chakra-ui/react";

const ErrorText = () => {
  return (
    <Text color="purple.700" textAlign="center" fontSize="24px">
      Woops! Something seems to be wrong. Check out your internet connection or
      try again later.
    </Text>
  );
};

export default ErrorText;
