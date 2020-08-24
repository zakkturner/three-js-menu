import React, { useState } from "react";
import "./App.scss";
import { Canvas } from "react-three-fiber";
import { useControl } from "react-three-gui";
import { Text } from "drei";

function App() {
  const [rotation, setRotation] = useState([0, 0, 0, 0]);

  const color = useControl("color", { type: "color", value: "#ADD8E6" });
  const fontSize = useControl("fontSize", {
    type: "number",
    value: 16.5,
    min: 1,
    max: 100,
  });

  const lineHeight = useControl("lineHeight", {
    type: "number",
    value: 0.75,
    min: 0.1,
    max: 10,
  });
  const letterSpacing = useControl("spacing", {
    type: "number",
    value: -0.08,
    min: -0.5,
    max: 1,
  });
  const textAlign = useControl("textAlign", {
    type: "select",
    items: ["left", "right", "center", "justify"],
    value: "justify",
  });
  const onMouseMove = (e) => {
    setRotation([
      ((e.clientY / e.target.offsetHeight - 0.5) * -Math.PI) / 8,
      ((e.clientX / e.target.offsetWidth - 0.5) * -Math.PI) / 8,
      0,
    ]);
  };
  return (
    <Canvas
      pixelRatio={window.devicePixelRatio}
      camera={{ position: [2, -2, 20], fov: 150 }}
      onMouseMove={onMouseMove}
    >
      <Text
        color={color}
        fontSize={fontSize}
        // maxWidth={(viewport.width / 100) * maxWidth}
        lineHeight={lineHeight}
        letterSpacing={letterSpacing}
        textAlign={textAlign}
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        anchorX="center"
        anchorY="middle"
        position={[0, 15, 0]}
        rotation={rotation}

        // bevelThickness={10}
      >
        Home
      </Text>
      <Text
        color={color}
        fontSize={fontSize}
        // maxWidth={(viewport.width / 100) * maxWidth}
        lineHeight={lineHeight}
        letterSpacing={letterSpacing}
        textAlign={textAlign}
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        anchorX="center"
        anchorY="middle"
        position={[0, -5, 0]}
        rotation={rotation}
      >
        Blog
      </Text>

      <Text
        color={color}
        fontSize={fontSize}
        // maxWidth={(viewport.width / 100) * maxWidth}
        lineHeight={lineHeight}
        letterSpacing={letterSpacing}
        textAlign={textAlign}
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        anchorX="center"
        anchorY="middle"
        position={[0, -25, 0]}
        rotation={rotation}
      >
        Contact
      </Text>
      {/* <OrbitControls /> */}
    </Canvas>
  );
}

export default App;
