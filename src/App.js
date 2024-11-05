import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage';
import About from './pages/about';
import ContactPage from './pages/contactpage';
import ProjectPage from './pages/projectpage';
import TailwindProject from './pages/tailwindProject';
import TailwindProjects from './pages/tailwindProjects';
import TailwindProjects3 from './pages/tailwindProjects3';
import { ThemeProvider } from './context/themeContext';
import Services from './components/skills/service';


function App() {
  return (
    <ThemeProvider>
 <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route exact path={'/'} element={
          <>
           <HomePage/>
          </>
        }/>
         <Route exact path={'/about'} element={
          <>
           <About/>
          </>
        }/>
        <Route exact path={'/services'} element={
          <>
           <Services/>
          </>
        }/>
         <Route exact path={'/contact'} element={
          <>
           <ContactPage/>
          </>
        }/>
        <Route exact path={'/project'} element={
          <>
           <ProjectPage/>
          </>
        }/>
        <Route exact path={'/project/Tailwind-project'} element={
          <>
           <TailwindProject/>
          </>
        }/>
        <Route exact path={'/project/Tailwinds-projects'} element={
          <>
           <TailwindProjects/>
          </>
        }/>
          <Route exact path={'/project/Tailwinds-projects3'} element={
          <>
           <TailwindProjects3/>
          </>
        }/>
      </Routes>
      <Sidebar />
      <Footer />
      
    </BrowserRouter>
    </ThemeProvider>
   
  );
}

export default App;
