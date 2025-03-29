import './App.css'
import "@mantine/carousel/styles.css";
import { MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const theme = createTheme({
    colors: {
      "mineShaft": [
        "#f6f6f6",
        "#e7e7e7",
        "#d1d1d1",
        "#b0b0b0",
        "#888888",
        "#6d6d6d",
        "#5d5d5d",
        "#4f4f4f",
        "#454545",
        "#3d3d3d",
        "#2d2d2d",
      ],
      "brightSun": [ "#fffbeb", "#fff3c6", "#ffe588", "#ffd149", "#ffbd20", "#f99b07", "#dd7302", "#b75006", "#943c0c", "#7a330d", "#461902"],
    },
  });
  return (
    <>
      <MantineProvider theme={theme}>
        <BrowserRouter>
        <Routes>
          <Route path="*" element={<HomePage/>}></Route>
        </Routes>
        </BrowserRouter>
      </MantineProvider>
    </>
  );
}

export default App
