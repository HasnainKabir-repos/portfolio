import React, { useState } from "react";
import {
  Box,
  Flex,
  Button,
  Link,
  useColorModeValue,
  useStyleConfig,
  Text,
  Skeleton
} from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function ProjectCard(props) {
  const {
    projectName,
    aboutProject,
    features,
    technologies,
    projectLink,
    imageUrl // Optional: Include image if available
  } = props;
  const [loadedprojectimg, setloadedprojectimg] = useState(false);
  const styles = useStyleConfig("Card");
  const primaryColor = useColorModeValue("#D2691E", "#FFA07A"); // Chocolate and LightSalmon
  const backgroundColor = useColorModeValue("#FFFAF0", "#2F4F4F"); // FloralWhite and DarkSlateGray
  const highlightTextColor = useColorModeValue("#4A90E2", "#50E3C2"); // Blue and Aqua colors
  const textColor = useColorModeValue("#1A202C", "#E2E8F0");

  return (
    <Box
      __css={styles}
      h={{ base: "100%" }}
      bg={backgroundColor}
      borderColor={primaryColor}
      transition="transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out"
      _hover={{
        base: "none",
        xl: { transform: "scale(1.03)", boxShadow: "md", border: "1px solid" }
      }}
    >
      {imageUrl && (
        <Box mb={{ base: "10px", "2xl": "10px" }}>
          <Skeleton
            isLoaded={loadedprojectimg}
            color="white"
            fadeDuration={1}
            height={"100%"}
          >
            <LazyLoadImage
              src={imageUrl}
              alt={projectName}
              effect="blur"
              onLoad={() => setloadedprojectimg(true)}
            />
          </Skeleton>
        </Box>
      )}
      <Flex flexDirection="column" justify="center" h="100%">
        <Flex direction="row" align="center" justify="center">
          <Text
            color={textColor}
            fontSize={{
              base: "xl",
              md: "lg",
              lg: "lg",
              xl: "lg",
              "2xl": "md",
              "3xl": "lg"
            }}
            mb="5px"
            me="14px"
            textAlign="center"
            cursor="default"
          >
            {projectName}
          </Text>
        </Flex>
        <Flex direction="row" align="center" justify="center">
          <Text
            color="secondaryGray.500"
            fontSize={{
              base: "sm"
            }}
            mb="5px"
            me="14px"
            textAlign="center"
          >
            {aboutProject}
          </Text>
        </Flex>
        <Flex direction="row" align="center" justify="center">
          <Text
            color={textColor}
            fontSize={{
              base: "sm"
            }}
            mb="5px"
            me="14px"
            textAlign="center"
          >
            <strong>Features: </strong>{features.join(", ")}
          </Text>
        </Flex>
        <Flex direction="row" align="center" justify="center">
          <Text
            color={textColor}
            fontSize={{
              base: "sm"
            }}
            mb="5px"
            me="14px"
            textAlign="center"
          >
            <strong>Technologies: </strong>{technologies.join(", ")}
          </Text>
        </Flex>
        <Flex
          align="center"
          justify="center"
          direction={{
            base: "column",
            md: "column",
            lg: "column",
            xl: "column",
            "2xl": "row"
          }}
          gap={{
            base: "20px"
          }}
          p="20px"
        >
          <Link
            href={projectLink}
            textcolor={useColorModeValue("black", "black")}
            target="_blank"
            mt={{
              base: "0px",
              md: "10px",
              lg: "0px",
              xl: "10px",
              "2xl": "0px"
            }}
          >
            <Button
              background={highlightTextColor}
              fontSize="sm"
              fontFamily="DM Sans"
              borderRadius="70px"
              px="24px"
              py="5px"
            >
              {technologies ? "View Project on GitHub" : "View Blog"}
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
