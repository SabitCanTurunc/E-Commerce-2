import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { Outlet } from 'react-router';


function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <main className='min-h-[calc(100vh-120px)]'>
        <Outlet />
      </main>
      <Footer />

    </>
  );

}

export default App;
