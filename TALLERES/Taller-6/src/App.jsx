import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Home from './pages/Home';
import Navbar from "./components/Layout/Navbar";
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
