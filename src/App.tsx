import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"

import {BrowserRouter as Router} from "react-router-dom"
import AppRoutes from "./Routes/AppRoutes"
import { Container, ToastContainer } from "react-bootstrap"
import {Suspense} from "react"
import Loader from "./Components/Loader/Loader"
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <>
<ToastContainer/>

<Router>
      <Header/>
        <Container style={{minHeight: '100vh', minWidth: '100%', padding: '0'}}>
          <Suspense fallback={<Loader/>}>
            <AppRoutes/>
          </Suspense>
        </Container>
      <Footer/>
</Router>

    </>
  )
}

export default App
