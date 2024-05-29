import { React, useState, useEffect } from "react";
import {
  Box,
  Flex,
  Icon,

  SimpleGrid,
  Text,
  useColorModeValue,
  useStyleConfig,
} from "@chakra-ui/react";
import routes from "../../routes";
import Navbar from "../../components/Navbar/Navbar";

import { AiFillPhone, AiOutlineMail } from "react-icons/ai";

import { Link } from "react-router-dom";

export default function Contact() {
  const [loadedimage1, setloadedimage1] = useState(false);
  const [loadedimage2, setloadedimage2] = useState(false);
  const styles = useStyleConfig("Card");
  const textColorPrimary = useColorModeValue("lightblue.100", "lightpeach.100");
  const primaryColor = useColorModeValue("#D2691E", "#FFA07A"); // Chocolate and LightSalmon
  const secondaryColor = useColorModeValue("#2F4F4F", "#F5F5F5"); // DarkSlateGray and WhiteSmoke
  const backgroundColor = useColorModeValue("#FFFAF0", "#2F4F4F"); // FloralWhite and DarkSlateGray

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

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
      <Box pt="30px">
      
        <SimpleGrid
          columns={{ base: 1, xl: 3, "2xl": 3 }}
          gap="20px"
          mt={{ sm: "40px", xl: "0" }}
          mb="20px"
          align={{ base: "center", xl: "center" }}
          justify={{ base: "center", xl: "center" }}
        >
          
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Box __css={styles}
            bg={backgroundColor}
            borderColor={primaryColor}
            >
              <Box textAlign="center">
                <Link
                  to="#"
                  onClick={(e) => {
                    window.location.href = "mailto:hasnainkabir120@gmail.com";
                    e.preventDefault();
                  }}
                >
                  <Icon
                    as={AiOutlineMail}
                    width="30px"
                    height="30px"
                    color="inherit"
                    cursor="pointer"
                  />
                </Link>
              </Box>

              <Text textAlign="center">EMAIL ME @</Text>

              <Text color={textColorPrimary} textAlign="center" mt="5px">
                hasnainkabir120@gmail.com
              </Text>
            </Box>
          </Flex>
          
        </SimpleGrid>
      </Box>
    </Box>
  );
}
