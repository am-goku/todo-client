import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';

function App() {
  return (
    <>
      <div className="overflow-hidden relative h-[100vh] flex flex-col">
        <div className="w-full sticky">
          <Header />
        </div>
        <div className='w-[100vw] h-[100vh]'>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
