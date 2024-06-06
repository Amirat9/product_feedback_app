import Header from './layouts/Header';
import Sidebar from './layouts/Sidebar';
import Home from './pages/Home';

function App() {
  return (
    <div className='bg-bgPrimary h-screen flex justify-center font-jost'>
      <div className='container flex gap-[30px] pt-[94px]'>
        <Sidebar />
        <div className='w-full'>
          <Header />
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
