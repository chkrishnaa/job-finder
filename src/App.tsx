import './App.css'
import "@mantine/carousel/styles.css";
import { MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import "@mantine/tiptap/styles.css";
import HomePage from './Pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import FindTalentsPage from './Pages/FindTalentsPage';
import FindJobsPage from './Pages/FindJobsPage';
import TalentProfilePage from './Pages/TalentProfilePage';
import JobDesriptionPage from './Pages/JobDescriptionPage';
import PostJobPage from './Pages/PostJobPage';
// import ApplyJobPage from './Pages/ApplyJobPage';
import { ScrollToTop } from './components/ScrollToTop';
import ApplyJobPage from './Pages/ApplyJobPage';
import CompanyPage from './Pages/CompanyPage';

function App() {
  const theme = createTheme({
    colors: {
      mineShaft: [
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

      brightSun: [
        "#fffbeb",
        "#fff3c6",
        "#ffe588",
        "#ffd149",
        "#ffbd20",
        "#f99b07",
        "#dd7302",
        "#b75006",
        "#943c0c",
        "#7a330d",
        "#461902",
      ],
    },
    fontFamily: "Poppins, sans-serif",
    focusRing: "never",
    primaryColor: "brightSun",
    primaryShade: 4,
  });

  return (
    <>
      <MantineProvider defaultColorScheme="dark" theme={theme}>
        <BrowserRouter>
          <ScrollToTop />
          <div className="relative">
            <Header />
            <Routes>
              <Route path="/find-jobs" element={<FindJobsPage />}></Route>
              <Route path="/find-talents" element={<FindTalentsPage />}></Route>
              <Route path="/company" element={<CompanyPage />}></Route>
              <Route path="/post-job" element={<PostJobPage />}></Route>
              <Route
                path="/job-description"
                element={<JobDesriptionPage />}
              ></Route>
              <Route path="/apply-job" element={<ApplyJobPage />}></Route>

              <Route
                path="/talent-profile"
                element={<TalentProfilePage />}
              ></Route>
              <Route path="*" element={<HomePage />}></Route>
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </MantineProvider>
    </>
  );
}

export default App
