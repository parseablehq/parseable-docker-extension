import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

function HeroSection() {
  return (
    <Box>
      <Container maxWidth="lg">
        <Box display={"flex"} justifyContent="space-between" container spacing={2}>
          <Box flex={11 / 12} item xs={8}>
            <Box>
              <Box>
                <img
                  width="250px"
                  src={"https://www.parseable.io/img/Logo%20parseable.svg"}
                  alt={""}
                />
              </Box>
              <Typography variant="h4" color={"#666666"} fontWeight="bold">
                Parseable Builder Extxension
              </Typography>
              <Typography mt={2} variant="body1" color={"#666666"}>
                Logs are noisy. Finding information is difficult and time
                consuming. Enhance your logging stack with Parseable, observe
                easily and act faster.
              </Typography>
              <Typography mt={2} variant="h6" color={"#666666"}>
                How to use this extension.
              </Typography>
              <Typography mt={1} variant="body1" color={"#666666"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Eleifend faucibus sed vel in purus. Pretium et felis habitant
                nunc ultrices at viverra purus Logs are noisy. Finding
                information is difficult and time consuming. Enhance your
                logging stack with Parseable, observe easily and act faster.
              </Typography>
            </Box>
          </Box>
          <Box  item xs={4}>
            <Box>
              <Box>
                <img
                  width="100%"
                  src={"https://www.parseable.io/img/feature-illustration.svg"}
                  alt={""}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        {/* <Box
          mt={5}
          width={"full"}
          height={64}
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgcolor="#04DF00"
          color="white"
          borderRadius={2}
        >
          <Typography variant="h6">
            Note: If you don’t fill these fields then also you can run parseable
            container. it will take default values mentioned in the fields
            itself.
          </Typography>
        </Box> */}
      </Container>
    </Box>
  );
}

export default HeroSection;
