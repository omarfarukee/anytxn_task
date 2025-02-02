import Layout from "./layout/Layout"
import 'animate.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init();
  })
  return (
    <>
      <Layout />
    </>
  )
}

export default App
