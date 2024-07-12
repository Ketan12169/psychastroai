import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Typography,
  Grid,
  Link,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/system";
import Hero from "./components/Hero";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#ff4081",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

const FeaturesSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
}));

const Feature = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  "& img": {
    width: "100%",
    height: "auto",
    maxWidth: "100%",
    maxHeight: "400px",
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(2),
  },
  "&:nth-of-type(even) img": {
    order: 2,
    marginBottom: 0,
    marginTop: theme.spacing(2),
  },
}));

const Footer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  display: "flex",
  justifyContent: "space-between",
}));

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <img
            src="https://psychastroai.com/static/img/Logo.png"
            alt="Logo"
            style={{ height: 40, marginRight: theme.spacing(2) }}
          />
          <Button color="inherit">Features</Button>
          <Button color="inherit">Pricing</Button>
          <Button color="inherit">FAQ</Button>
          <Button color="inherit">Login</Button>
          <Box sx={{ flexGrow: 1 }} />
          <Button color="secondary" variant="contained">
            Get Started
          </Button>
        </Toolbar>
      </AppBar>

      <Hero />

      <FeaturesSection>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Feature>
              <img
                src="/image.png"
                alt="Feature 1"
                style={{ objectFit: "contain" }}
              />
              <Typography variant="h3" sx={{ color: "white" }}>
                Synthesis Interpretation::Life Orientation, Temperament, and
                Approach
              </Typography>
              <Typography variant="body1" sx={{ color: "white" }}>
                The Divided Aspect Structure in an astrological chart outlines a
                consciousness marked by division and variability, shaping a
                person's behavior and mindset in distinctive ways. Fragmented
                Thinking: Thoughts may zigzag rather than flow in a straight
                line, causing sudden shifts influenced by context. Duality in
                Life Domains: Behaviors and responses can vary significantly
                between professional and personal spheres, highlighting a split
                consciousness. Adaptability and Flexibility: This structure
                enables quick and effective adjustments to different scenarios,
                reflecting a versatile mindset. Complexity and Unpredictability:
                The inherent complexity of this consciousness results in
                behavior that is hard to foresee, with reactions that might seem
                abrupt. Inner Conflict: Multiple consciousness structures may
                lead to internal contradictions, creating occasional confusion
                or discomfort. Understanding the Divided Aspect Structure sheds
                light on the complexity of one's personality and behavior,
                offering a path to navigate its challenges more harmoniously. By
                embracing the inherent adaptability and flexibility, individuals
                can utilize these traits advantageously across various aspects
                of life.
              </Typography>
            </Feature>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Feature>
              <Typography variant="h3" sx={{ color: "white" }}>
                Feature 2
              </Typography>
              <Typography variant="body1" sx={{ color: "white" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati eligendi inventore impedit ipsum, aspernatur
                architecto consequuntur voluptates iste temporibus amet pariatur
                accusamus quibusdam! Exercitationem saepe fuga, sapiente sunt
                eveniet ducimus! Saepe dicta, maxime ipsa animi quisquam
                repudiandae optio ipsam culpa doloremque aliquid natus
                molestias, quae aperiam pariatur alias expedita? Vitae, vero!
                Tempore hic voluptas quam quae ipsum, debitis cum eligendi!
                Exercitationem expedita, cupiditate aliquid voluptas fugiat amet
                quae repellat rerum architecto, omnis error. Odit vitae culpa,
                quis numquam corporis tempora neque, totam impedit excepturi,
                accusamus ad explicabo nisi. Harum, corporis! Deleniti, quos
                veniam voluptatum ratione in et exercitationem quisquam dolores
                quo nostrum delectus eum officia dicta nihil quaerat ullam
                labore dolor, ab quia numquam enim dignissimos doloremque!
                Neque, quia nobis. Velit porro delectus, consectetur esse est
                blanditiis at eligendi doloribus a laudantium dolorum sint quo
                modi hic illo pariatur, quaerat quasi quas accusantium! Esse,
                iure temporibus harum aut quidem cupiditate.
              </Typography>
              <img
                src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Feature 2"
              />
            </Feature>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Feature>
              <Typography variant="h3" sx={{ color: "white" }}>
                Feature 2
              </Typography>
              <Typography variant="body1" sx={{ color: "white" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati eligendi inventore impedit ipsum, aspernatur
                architecto consequuntur voluptates iste temporibus amet pariatur
                accusamus quibusdam! Exercitationem saepe fuga, sapiente sunt
                eveniet ducimus! Saepe dicta, maxime ipsa animi quisquam
                repudiandae optio ipsam culpa doloremque aliquid natus
                molestias, quae aperiam pariatur alias expedita? Vitae, vero!
                Tempore hic voluptas quam quae ipsum, debitis cum eligendi!
                Exercitationem expedita, cupiditate aliquid voluptas fugiat amet
                quae repellat rerum architecto, omnis error. Odit vitae culpa,
                quis numquam corporis tempora neque, totam impedit excepturi,
                accusamus ad explicabo nisi. Harum, corporis! Deleniti, quos
                veniam voluptatum ratione in et exercitationem quisquam dolores
                quo nostrum delectus eum officia dicta nihil quaerat ullam
                labore dolor, ab quia numquam enim dignissimos doloremque!
                Neque, quia nobis. Velit porro delectus, consectetur esse est
                blanditiis at eligendi doloribus a laudantium dolorum sint quo
                modi hic illo pariatur, quaerat quasi quas accusantium! Esse,
                iure temporibus harum aut quidem cupiditate.
              </Typography>
              <img
                src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Feature 2"
              />
            </Feature>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Feature>
              <Typography variant="h3" sx={{ color: "white" }}>
                Feature 2
              </Typography>
              <Typography variant="body1" sx={{ color: "white" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati eligendi inventore impedit ipsum, aspernatur
                architecto consequuntur voluptates iste temporibus amet pariatur
                accusamus quibusdam! Exercitationem saepe fuga, sapiente sunt
                eveniet ducimus! Saepe dicta, maxime ipsa animi quisquam
                repudiandae optio ipsam culpa doloremque aliquid natus
                molestias, quae aperiam pariatur alias expedita? Vitae, vero!
                Tempore hic voluptas quam quae ipsum, debitis cum eligendi!
                Exercitationem expedita, cupiditate aliquid voluptas fugiat amet
                quae repellat rerum architecto, omnis error. Odit vitae culpa,
                quis numquam corporis tempora neque, totam impedit excepturi,
                accusamus ad explicabo nisi. Harum, corporis! Deleniti, quos
                veniam voluptatum ratione in et exercitationem quisquam dolores
                quo nostrum delectus eum officia dicta nihil quaerat ullam
                labore dolor, ab quia numquam enim dignissimos doloremque!
                Neque, quia nobis. Velit porro delectus, consectetur esse est
                blanditiis at eligendi doloribus a laudantium dolorum sint quo
                modi hic illo pariatur, quaerat quasi quas accusantium! Esse,
                iure temporibus harum aut quidem cupiditate.
              </Typography>
              <img
                src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Feature 2"
              />
            </Feature>
          </Grid>

          {/* Add more feature rows as needed */}
        </Grid>
      </FeaturesSection>

      <Footer>
        <Typography variant="body2">© 2024 Your Company</Typography>
        <Link href="#">Contact</Link>
        <Link href="#">About Us</Link>
        <Link href="#">Terms of Service</Link>
      </Footer>
    </ThemeProvider>
  );
};

export default App;
