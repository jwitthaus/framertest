import { Button, Paper } from "@mui/material";
import "./App.css";
import { useState } from "react";
import { animate, motion } from "framer-motion";

function App() {
  const [zoom, setZoom] = useState(10);

  const AnimatedPaper = motion(Paper);
  return (
    <div className="App">
      <Button
        variant="contained"
        onClick={() => {
          setZoom(zoom + 10);
        }}
      >
        increase size
      </Button>
      <AnimatedPaper
        sx={{
          height: "100px",
          backgroundColor: "#aaaaaa",
        }}
        animate={{ width: `${zoom}%` }}
      ></AnimatedPaper>
    </div>
  );
}

export default App;
