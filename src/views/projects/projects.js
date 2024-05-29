import { React, useEffect } from "react";
import {
  Box,
  SimpleGrid,
  Flex,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import routes from "../../routes";
import Navbar from "../../components/Navbar/Navbar";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
export default function Projects() {
  const textColorPrimary = useColorModeValue(
    "secondaryGray.900",
    "lightpeach.100"
  );

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
      <Box pt={{ base: "20px", md: "40px", xl: "40px" }}>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
        ></Flex>
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          gap="25px"
          alignItems="center"
          justifyContent="center"
        >
          <ProjectCard
            projectName={"ProjectHub"}
            aboutProject={"An interdisciplinary project management and Collaboration platform "}
            features ={["Version Control", "Multidicsiplinary project listing", "Skill based project recommendation", "Reputation & Incentive system"]}
            technologies={["EXPRESS JS", "NODE JS", "REACT JS", "MONGODB", "GITHUB ACTIONS", "GIT", "MOCHA JS", "DOCKER"]}
            projectLink="https://github.com/DevSprintNaN"
          />
        <ProjectCard
            projectName="EcoConnect (2023)"
            aboutProject="A social media for environment enthusiasts."
            features={[
              "EcoEvent for posting events and interacting with them",
              "EcoCommunity for sharing content within an online community",
              "EcoProfile for maintaining user profile",
              "Location based event tracking"
            ]}
            technologies={[
              "MongoDB",
              "ExpressJs",
              "ReactJs",
              "NodeJs",
              "Git",
              "MochaJs"
            ]}
            projectLink="https://github.com/HasnainKabir-repos/EcoConnect"

        />
        <ProjectCard
          projectName="CampusWorks (2023)"
          aboutProject="A platform for job and internship searching, proposal management, messaging, and online discussion forums."
          features={[
            "Job and internship searching and posting",
            "Proposal management",
            "Messaging between client and job seeker",
            "Online discussion forums"
          ]}
          technologies={["MongoDB", "ExpressJs", "ReactJs", "Git", "NodeJs"]}
          projectLink="https://github.com/HasnainKabir-repos/CampusWorks"
        />
        <ProjectCard
          projectName="Med.io (2022)"
          aboutProject="A platform for booking appointments and maintaining medical records."
          features={[
            "Appointment booking",
            "Creating patient profile",
            "Maintaining medical records"
          ]}
          technologies={[
            "PHP",
            "MYSQL",
            "HTML",
            "CSS",
            "JQUERY"
          ]}
          projectLink="https://github.com/HasnainKabir-repos/Med.io"
          />
          <ProjectCard
          projectName="Racing In IUT"
          aboutProject="A design pattern project for a racing game."
          features={[
            "Implemented design patterns for a racing scenario using different cars, race track types, etc."
          ]}
          technologies={[
            "JAVA"
          ]}
          projectLink="https://github.com/HasnainKabir-repos/Design-Pattern"
          />

        </SimpleGrid>
        
      </Box>
    </Box>
  );
}
