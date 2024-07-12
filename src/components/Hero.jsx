// src/HeroBanner.js
import React, { useRef } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { styled } from "@mui/system";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

const HeroContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "100vh",
  display: "flex",
  // alignItems: "center",
  // justifyContent: "center",
  backgroundImage: `url('')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "#fff",
  textAlign: "center",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay for better text readability
  },
}));

const Content = styled(Container)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "30px",
  marginBottom: "30px",
  // justifyContent: "center",

  animation: "fadeIn 2s ease-out",
  "@keyframes fadeIn": {
    "0%": { opacity: 0 },
    "100%": { opacity: 1 },
  },
}));

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bY = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);
  const tY = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <HeroContainer ref={ref}>
      <Content>
        <Typography variant="h3" component="h1" gutterBottom>
          Natal Chart Interpretation
        </Typography>
        <motion.Box
          className="shui info"
          id="info_head"
          style={{ y: bY }}
          sx={{
            backgroundColor: "#1976D2 ",

            padding: "20px",
            width: "80%",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          }}
        >
          <img src="/1.png" alt="" style={{ width: "80%" }} />
          {/* <motion.Box id="birthday">
            <Box
              className="name_gender"
              display="flex"
              justifyContent={"center"}
            >
              <Typography variant="h3" id="name">
                Einstein-Demo
              </Typography>
              <Typography variant="h3" id="gender">
                Male
              </Typography>
            </Box>
            <Box sx={{ height: 10 }} />
            <Typography variant="h4" id="solar">
              March 14, 1879, 11:30 a.m.
            </Typography>
            <Typography variant="h4">
              Timezone:&nbsp;+00:53&nbsp;Europe/Berlin
            </Typography>
            <Box sx={{ height: 5 }} />
            <Typography variant="h4">GMT+00:53:28</Typography>
            <Box sx={{ height: 10 }} />
            <Typography variant="h4">Ulm, Germany</Typography>
            <Typography variant="h4">9e59,&nbsp;48n24</Typography>
          </motion.Box> */}
        </motion.Box>
        <motion.Box
          className="shui info"
          id="info_head"
          style={{ y: tY }}
          sx={{
            backgroundColor: "#1976D2",
            padding: "20px",
            width: "100%",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",

            overflow: "hidden", // Ensure the content doesn't overflow the box
          }}
        >
          <img
            src="/2.png"
            alt="Image description"
            style={{
              maxWidth: "100%",
              height: "auto",
              display: "block",
              margin: "0 auto", // Center the image
            }}
          />
        </motion.Box>
      </Content>
    </HeroContainer>
  );
};

export default Hero;
