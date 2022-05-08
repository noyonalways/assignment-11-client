import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import AddProduct from './Pages/AddProduct/AddProduct';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import MyItems from './Pages/MyItems/MyItems';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Register/Register';
import UpdateProduct from './Pages/UpdateProduct/UpdateProduct';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init();
  return (
    <div className="App">
      <HelmetProvider>
        <Header />
        <Toaster />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/manage-inventory' element={<ManageInventory />} />
          <Route path='/my-items' element={
            <RequireAuth><MyItems/></RequireAuth>
          } />
          <Route path='/product/:productId' element={
            <RequireAuth><UpdateProduct/></RequireAuth>
          } />
          <Route path='/add-product' element={
            <RequireAuth><AddProduct/></RequireAuth>
          } />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
        <Footer />
      </HelmetProvider>
    </div>
  );
}

export default App;
