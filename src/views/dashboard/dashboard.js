import React, { useState, useEffect } from "react";
import {
  Flex,
  Box,
  Text,
  Grid,
  useColorModeValue,
  useStyleConfig,
  Skeleton,
} from "@chakra-ui/react";
import "react-lazy-load-image-component/src/effects/blur.css";
import Navbar from "../../components/Navbar/Navbar";
import routes from "../../routes";
import axios from "axios";
import Typewriter from "typewriter-effect";

export default function Dashboard() {
  const [quote, setQuote] = useState("");
  const [loadedDashboardimg, setloadedDashboardimg] = useState(false);
  const styles = useStyleConfig("Card");
  const highlightTextColor = useColorModeValue("#4A90E2", "#50E3C2"); // Blue and Aqua colors
  const textColor = useColorModeValue("#1A202C", "#E2E8F0");
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  useEffect(() => {
    axios
      .get("https://api.quotable.io/random")
      .then((response) => {
        let content = response.data.content;
        setQuote(content);
      })
      .catch((error) => {
        setQuote("");
        console.error("Error fetching quote:", error);
      });
  }, []);

  const getActiveRoute = (routes) => {
    for (let i = 0; i < routes.length; i++) {
      if (window.location.href.indexOf(routes[i].path) !== -1) {
        return routes[i].navbarDisplayName;
      }
    }
  };

  return (
    <Box>
      <Navbar displayText={getActiveRoute(routes)} />
      <Box pt={{ base: "50px", md: "70px", xl: "30px" }}>
        <Flex direction="row" justifyContent="center" alignItems="center">
          <Grid
            templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
            templateRows={{ base: "repeat(2, 0.5fr)", lg: "1fr" }}
            gap={{ xl: "40px" }}
          >
            <Box
              pt={{ xl: "90px" }}
              pl="30px"
              textAlign="left"
              fontSize={{ sm: "1.2em", md: "2.2em", xl: "1.8em" }}
            >
              <Flex direction="column" justifyContent="flex-start" alignItems="flex-start">
                <Box __css={styles.box} border="none">
                  <Text fontFamily="Verdana, sans-serif" fontWeight="700" color={textColor}>
                    Hi There! 👋
                  </Text>
                  <Text fontFamily="Verdana, sans-serif" fontWeight="700" color={textColor} mt="10px">
                    I'm{" "}
                    <Text display="inline-flex" color={highlightTextColor}>
                      A Z Hasnain Kabir
                    </Text>
                  </Text>
                  <Text fontFamily="Verdana, sans-serif" fontWeight="700" color={textColor} mt="10px">
                    A{" "}
                    <Text display="inline-flex" color={highlightTextColor}>
                      Software Engineering Student
                    </Text>
                  </Text>
                </Box>
              </Flex>
            </Box>
            
          </Grid>
        </Flex>

        <Flex direction="column" justifyContent="center" alignItems="center">
          <Box
            __css={styles.box}
            border="none"
            textAlign="center"
            cursor="default"
            mt="40px"
          >
            Random Quote
            <Box
              fontSize={{ sm: "1em", md: "1.4em", xl: "1.4em" }}
              color={highlightTextColor}
              cursor="default"
            >
              {quote ? (
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.typeString(quote).start();
                  }}
                />
              ) : (
                <span>|</span>
              )}
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
