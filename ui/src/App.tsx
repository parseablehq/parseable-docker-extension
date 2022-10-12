import { Box } from "@mui/system";
import HeroSection from "./components/HeroSection";
import Form from "./components/Form";
import "./App.css";

function App() {
  return (
    <Box py={10}>
      <HeroSection />
      <Form />
    </Box>
  );
}

export default App;
