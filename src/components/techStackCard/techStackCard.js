import { React, useState } from "react";
import { Box, useStyleConfig, useColorModeValue, Flex, Image, Skeleton } from "@chakra-ui/react";

export default function TechStackCard(props) {
  const { imagepath, background } = { ...props };
  const styles = useStyleConfig("Card");
  const [loadedTechimg, setloadedTechimg] = useState(false);
  const primaryColor = useColorModeValue("#D2691E", "#FFA07A"); // Chocolate and LightSalmon
  const secondaryColor = useColorModeValue("#2F4F4F", "#F5F5F5"); // DarkSlateGray and WhiteSmoke
  const backgroundColor = useColorModeValue("#FFFAF0", "#2F4F4F"); // FloralWhite and DarkSlateGray

  return (
    <Box
      __css={styles}
      bg={backgroundColor}
      borderColor={primaryColor}
      s
      transition="transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out"
      _hover={{
        base: "none",
        xl: { transform: "scale(1.08)", boxShadow: "lg", cursor: "pointer" }
      }}
    >
      <Flex
        my="auto"
        h="100%"
        align={{ base: "center", xl: "start" }}
        justify={{ base: "center", xl: "center" }}
      >
        <Skeleton
          isLoaded={loadedTechimg}
          color="white"
          fadeDuration={1}
          height={"100%"}
        >
          <Image
            boxSize="120px"
            src={imagepath}
            backgroundColor={backgroundColor}
            onLoad={() => setloadedTechimg(true)}
          ></Image>
        </Skeleton>
      </Flex>
    </Box>
  );
}
