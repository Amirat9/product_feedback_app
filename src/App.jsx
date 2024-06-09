import Home from './pages/Home';
import Empty from './pages/Empty';
import NewFeedback from './pages/NewFeedback';
import EditFeedback from './pages/EditFeedback';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='container mx-auto pb-14 sm:pb-28 sm:pt-10 md:pt-[96px] md:pb-32 lg:max-w-[1110px]'>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='*'
            element={<Empty />}
          />
          <Route
            path='/new-feedback'
            element={<NewFeedback />}
          />
          <Route
            path='/edit-feedback'
            element={<EditFeedback />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
