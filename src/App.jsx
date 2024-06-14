import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Empty from './pages/Empty';
import FeedbackDetail from './pages/FeedbackDetail';
import NewFeedback from './pages/NewFeedback';
import EditFeedback from './pages/EditFeedback';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/empty'
          element={<Empty />}
        />
        <Route
          path='/feedback-detail/:id'
          element={<FeedbackDetail />}
        />
        <Route
          path='/new-feedback'
          element={<NewFeedback />}
        />
        <Route
          path='/edit-feedback/:id'
          element={<EditFeedback />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
