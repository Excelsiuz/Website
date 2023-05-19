import { Routes, Route } from 'react-router-dom';
import { Container } from '@chakra-ui/react'

import Header from './components/Header/Header';
import Home from './routes/Home';
import PropertyDetails from './routes/PropertyDetails';
import Footer from './components/Footer'
import HouseProvider from './context/HouseContext';
import HouseDetails from './components/PropertyDetails/HouseDetails';
import AboutUs from './routes/AboutUs';

const App = () => {
  return (
    <HouseProvider>
      <Container maxW='container.lg' px='6'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='property-details' element={<PropertyDetails />} >
            <Route path=":propertyId" element={<HouseDetails />} />
          </Route>
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/home" element={<Home />} />
          <Route path="*"
            element={<main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
            }
          />
          <Route path="/Registrasi" element={<Registrasi />} />
        </Routes>
      </Container>
      <Footer />
    </HouseProvider>
  )
}

export default App