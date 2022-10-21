import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { createDockerDesktopClient } from "@docker/extension-api-client";

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
  const [deployed, setDeployed] = useState(false);
  const [response, setResponse] = useState({});
  const [ContainerId, setContainerId] = useState("");
  const [portNumber, setPortNumber] = useState(8000);
  const [volumePath, setVolumePath] = useState("/temp/data");

  const resetHandler = () => {
    setUsername("parseable");
    setPassword("parseable");
    setBucketUrl("https://minio.parseable.io:9000");
    setAccessKey("minioadmin");
    setSecretKey("minioadmin");
    setBucketName("parseable");
    setRegion("us-east-1");
    setLocalStorage("./data");
  };

  async function runDockerParseable() {
    const result = ddClient.docker.cli.exec(
      "run",
      [
        "-p",
        `${portNumber}:8000`,
        "-v",
        `${volumePath}:/data`,
        "parseable/parseable:v0.0.5",
        "parseable",
        "server",
        "--username",
        username,
        "--password",
        password,
        "--s3-endpoint-url",
        bucketUrl,
        "--s3-access-key-id",
        accessKey,
        "--s3-secret-key",
        secretKey,
        "--s3-region",
        region,
        "--s3-bucket-name",
        bucketName,
      ],
      {
        stream: {
          async onOutput() {
            const containers = await ddClient.docker.listContainers();
            console.log(
              containers.length > 0 &&
                containers.filter(
                  (container) => container.Ports[0]?.PublicPort === 8000
                )[0].Id
            );
            setContainerId(
              containers.length > 0 &&
                containers.filter(
                  (container) => container.Ports[0]?.PublicPort === 8000
                )[0].Id
            );
            setDeployed(true);
          },
          onClose(exitCode) {
            console.log("onClose with exit code " + exitCode);
          },
          splitOutputLines: true,
        },
      }
    );
  }

  return (
    <Container maxWidth="lg">
      {deployed ? (
        <Container maxWidth="lg">
          <Box>
            Congratulations you have successfully deployed parseable container
            with ContainerId :{" "}
            <span style={{ color: "green" }}>{ContainerId}</span> and running on{" "}
            <span>
              <a href="http://localhost:8000">http://localhost:8000</a>
            </span>
          </Box>
        </Container>
      ) : (
        <Container maxWidth="lg">
          <Box>
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
                  sx={{ input: { color: "#A6A6A6" } }}
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
                  sx={{ input: { color: "#A6A6A6" } }}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Box>
            </Box>
          </Box>
          <Box>
            <Typography mt={2} fontWeight="bold" variant="h6" color={"#666666"}>
              Docker Config
            </Typography>
            <Box display="flex" width="100%" mt={2}>
              <Box display="flex" width="100%" flexDirection={"column"} mx={2}>
                <Typography mb={1} variant="subtitle" color={"#666666"}>
                  Local Port Number
                </Typography>
                <TextField
                  id="outlined-basic"
                  value={portNumber}
                  type="number"
                  sx={{ input: { color: "#A6A6A6" } }}
                  onChange={(e) => setPortNumber(e.target.value)}
                />
              </Box>
              <Box display="flex" width="100%" flexDirection={"column"} mx={2}>
                <Typography mb={1} variant="subtitle" color={"#666666"}>
                  Local Volume Path
                </Typography>
                <TextField
                  id="outlined-basic"
                  value={volumePath}
                  sx={{ input: { color: "#A6A6A6" } }}
                  onChange={(e) => setVolumePath(e.target.value)}
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
                  sx={{ input: { color: "#A6A6A6" } }}
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
                  sx={{ input: { color: "#A6A6A6" } }}
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
                  sx={{ input: { color: "#A6A6A6" } }}
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
                  sx={{ input: { color: "#A6A6A6" } }}
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
                  sx={{ input: { color: "#A6A6A6" } }}
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
                  sx={{ input: { color: "#A6A6A6" } }}
                  onChange={(e) => setLocalStorage(e.target.value)}
                />
              </Box>
            </Box>
            <Box display="flex" width="100%" justifyContent="flex-end" mt={5}>
              <Stack direction="row" spacing={4}>
                <Button onClick={() => resetHandler()} variant="outlined">
                  Reset
                </Button>
                <Button
                  onClick={() => runDockerParseable()}
                  variant="contained"
                >
                  Deploy
                </Button>
              </Stack>
            </Box>
          </Box>
        </Container>
      )}
    </Container>
  );
};

export default Form;
