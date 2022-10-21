import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

function HeroSection() {
  return (
    <Box>
      <Container maxWidth="lg">
          <Box flex={11 / 12} item xs={8}>
            <Box>
              <Box>
                <img
                  width="250px"
                  src={"https://www.parseable.io/img/Logo%20parseable.svg"}
                  alt={""}
                />
              </Box>
              <Typography mt={2} variant="body1" color={"#666666"}>
                Parseable Docker extension is a simple, one-click solution to
                deploy Parseable on your machine and start ingesting and analyzing
                application and event logs.
              </Typography>
              <Typography mt={2} variant="h6" color={"#666666"}>
                How to use this extension.
              </Typography>
              <Typography mt={1} variant="body1" color={"#666666"}>
                Fill in the below fields with the relevant information, and click
                on the "deploy" button. This will start Parseable on port 8000.
                You can now navigate to http://localhost:8000 in your browser.
                Refer the Parseable documentation for details: https://www.parseable.io/docs/deployment/docker 
              </Typography>
            </Box>
          </Box>
      </Container>
      <br />
      <hr />
    </Box>
  );
}

export default HeroSection;
