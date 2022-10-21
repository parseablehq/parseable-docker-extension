import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { createDockerDesktopClient } from '@docker/extension-api-client';

const Form = () => {
  const [username, setUsername] = useState("parseable");
  const [password, setPassword] = useState("parseable");
  const [bucketUrl, setBucketUrl] = useState(
    "https://minio.parseable.io:9000/"
  );
  const [accessKey, setAccessKey] = useState("minioadmin");
  const [secretKey, setSecretKey] = useState("minioadmin");
  const [bucketName, setBucketName] = useState("parseable");
  const [region, setRegion] = useState("us-east-1");
  const [localStorage, setLocalStorage] = useState("./data");
  const ddClient = createDockerDesktopClient();

  const resetHandler = () => {
    setUsername("parseable");
    setPassword("parseable");
    setBucketUrl("https://minio.parseable.io:9000/");
    setAccessKey("minioadmin");
    setSecretKey("minioadmin");
    setBucketName("parseable");
    setRegion("us-east-1");
    setLocalStorage("./data");
  };

  async function runDockerParseable() {
    const result = await ddClient.docker.cli.exec('run parseable/parseable:v0.0.5 parseable server --demo',[]);
  }

  return (
    <Container maxWidth="lg">
      <Box>
        {/* <Typography mb={2} textAlign={'center'} mt={5} variant="h6" color={"#666666"}>
          Its optional to fill and parseable will start with default config if
          fields are not filled.
        </Typography> */}
        <Typography fontWeight="bold" variant="h6" color={"#666666"}>
          Login Credentials
        </Typography>
        <Box display="flex" width="100%" mt={2}>
          <Box display="flex" width="100%" flexDirection={"column"} mx={2}>
            <Typography mb={1} variant="subtitle" color={"#666666"}>
              Username to Set for Parseable
            </Typography>
            <TextField
              id="outlined-basic"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Box>
          <Box display="flex" width="100%" flexDirection={"column"} mx={2}>
            <Typography mb={1} variant="subtitle" color={"#666666"}>
              Password to Set for Parseable
            </Typography>
            <TextField
              id="outlined-basic"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography mt={2} fontWeight="bold" variant="h6" color={"#666666"}>
          Environment Variables
        </Typography>
        <Box display="flex" width="100%" mt={2}>
          <Box display="flex" width="100%" flexDirection={"column"} mx={2}>
            <Typography mb={1} variant="subtitle" color={"#666666"}>
              S3 / Compatible URL
            </Typography>
            <TextField
              id="outlined-basic"
              value={bucketUrl}
              onChange={(e) => setBucketUrl(e.target.value)}
            />
          </Box>
          <Box display="flex" width="100%" flexDirection={"column"} mx={2}>
            <Typography mb={1} variant="subtitle" color={"#666666"}>
              S3 / Compatible Bucket Name
            </Typography>
            <TextField
              id="outlined-basic"
              value={bucketName}
              onChange={(e) => setBucketName(e.target.value)}
            />
          </Box>
        </Box>
        <Box display="flex" width="100%" mt={2}>
          <Box display="flex" width="100%" flexDirection={"column"} mx={2}>
            <Typography mb={1} variant="subtitle" color={"#666666"}>
              S3 / Compatible Access Key
            </Typography>
            <TextField
              id="outlined-basic"
              value={accessKey}
              onChange={(e) => setAccessKey(e.target.value)}
            />
          </Box>
          <Box display="flex" width="100%" flexDirection={"column"} mx={2}>
            <Typography mb={1} variant="subtitle" color={"#666666"}>
              S3 / Compatible Secret Key
            </Typography>
            <TextField
              id="outlined-basic"
              value={secretKey}
              onChange={(e) => setSecretKey(e.target.value)}
            />
          </Box>
        </Box>
        <Box display="flex" width="100%" mt={2}>
          <Box display="flex" width="100%" flexDirection={"column"} mx={2}>
            <Typography mb={1} variant="subtitle" color={"#666666"}>
              S3 / Compatible Region
            </Typography>
            <TextField
              id="outlined-basic"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
            />
          </Box>
          <Box display="flex" width="100%" flexDirection={"column"} mx={2}>
            <Typography mb={1} variant="subtitle" color={"#666666"}>
              Local Data Storage Path
            </Typography>
            <TextField
              id="outlined-basic"
              value={localStorage}
              onChange={(e) => setLocalStorage(e.target.value)}
            />
          </Box>
        </Box>
        <Box display="flex" width="100%" justifyContent="flex-end" mt={5}>
          <Stack direction="row" spacing={4}>
            <Button onClick={() => resetHandler()} variant="outlined">
              Reset
            </Button>
            <Button onClick={() => runDockerParseable()} variant="contained">
              Deploy
            </Button>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default Form;
