import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Protect from './middleware/component/Protect';

function App() {
  return (
    <>
      <Protect>
        <div className="overflow-hidden relative h-[100vh] flex flex-col">
          <div className="w-full sticky">
            <Header />
          </div>
          <div className="w-[100vw] h-[100vh]">
            <Outlet />
          </div>
        </div>
      </Protect>
    </>
  );
}

export default App;
