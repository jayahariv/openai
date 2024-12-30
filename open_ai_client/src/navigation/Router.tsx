import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chat from '../modules/chat/chat.page';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Chat />} />
    </Routes>
  </Router>
);

export default AppRouter;
