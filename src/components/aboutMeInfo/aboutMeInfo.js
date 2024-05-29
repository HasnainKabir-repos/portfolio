import React from "react";
import { Box, Text, useColorModeValue, useStyleConfig } from "@chakra-ui/react";

export default function EducationInfo(props) {
  const { degree, institution, year } = props;
  const primaryColor = useColorModeValue("#D2691E", "#FFA07A"); // Chocolate and LightSalmon
  const secondaryColor = useColorModeValue("#2F4F4F", "#F5F5F5"); // DarkSlateGray and WhiteSmoke
  const backgroundColor = useColorModeValue("#FFFAF0", "#2F4F4F"); // FloralWhite and DarkSlateGray
  const styles = useStyleConfig("Card");

  return (
    <Box
      __css={styles}
      bg={backgroundColor}
      p="10px"
      borderRadius="10px"
      border="1px solid"
      borderColor={primaryColor}
      boxShadow="lg"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        gap="5px"
      >
        <Text color={secondaryColor} fontSize="18px" fontWeight="bold">
          {degree}
        </Text>
        <Text color={primaryColor} fontSize="16px" fontStyle="italic">
          {institution}
        </Text>
        <Text color={secondaryColor} fontSize="14px">
          {year}
        </Text>
      </Box>
    </Box>
  );
}
