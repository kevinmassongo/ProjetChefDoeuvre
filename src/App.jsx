import { Outlet } from 'react-router-dom';
import './App.css'
import Header from './components/header/header'
import Footer from './page/footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  return (
    <>
      <Header />
      <ToastContainer />
      <Outlet></Outlet>
      <Footer />
    </>
  )
}

export default App
