import { Box, Heading, Text } from "@chakra-ui/react";
import {
  isRouteErrorResponse,
  useRouteError,
} from "react-router-dom";
import Navbar from "../components/Navbar";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <Box padding={5}>
      <Navbar />
      <Heading>Oops...</Heading>
      <Text mt={10}>
        {isRouteErrorResponse(error)
          ? "This page does not exist"
          : " Something went wrong 🦖"}
      </Text>
    </Box>
  );
};

export default ErrorPage;
