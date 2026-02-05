
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
// import Navbar from './components/Navbar';
import Navbar from './components/common/Navbar';
// import Footer from './components/Footer';
import Footer from './components/common/Footer';

function App() {


  return (
    <BrowserRouter>
    <Navbar />
    <AppRoutes />
    <Footer />
  </BrowserRouter>
  )
}

export default App
