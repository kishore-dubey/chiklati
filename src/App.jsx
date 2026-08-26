import { createBrowserRouter, createRoutesFromElements, RouterProvider ,Route} from "react-router-dom";

import Layout from "./layouts/Layout";

import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import About from "./pages/About";
import ServiceDetails from "./pages/ServiceDetails";
import Contact from "./pages/Contact";
const router = createBrowserRouter(
  createRoutesFromElements(

    <Route element={<Layout/>}>
        <Route path="/" element={<Home />} />
        <Route path="services">
        <Route index element={<ServicesPage />} />
        <Route path=":slug" element={<ServiceDetails />} />
      </Route>

      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>} />

    </Route>
  )
)


function App() {

  return(

      
      <RouterProvider router={router} />
   
  )
}

export default App;