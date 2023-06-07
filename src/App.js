import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowSummary from './components/ShowSummary';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ShowList />} />
        <Route path="/movie-tickets-react/summary/:showId" element={<ShowSummary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

