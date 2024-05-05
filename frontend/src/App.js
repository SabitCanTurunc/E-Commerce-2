import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import { Outlet } from 'react-router';


function App() {
  return (
    <>
      <Header/>
      <main className='min-h-[calc(100vh-100px)]'>
        <Outlet/> 
      </main>
      <Footer/>
      
    </>
  );

}

export default App;
