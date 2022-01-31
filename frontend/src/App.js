import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreens from './screens/HomeScreens';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';

const App = () => {
  return (
    <>
    <Header />
      <main className="py-3" >
        <Container>
          <Routes>
            <Route path="/login" element={<LoginScreen />}/>    
            <Route path="/products/:id" element={<ProductScreen />}/>    
            <Route path='/cart/:id' element={<CartScreen />} />
            <Route path='/cart' element={<CartScreen />} />
            <Route path="/" element={<HomeScreens />}/>    
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
