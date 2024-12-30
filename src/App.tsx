import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/drizzlereact" element={<h1>Hello World from Drizzle React!</h1>} />
      </Routes>
    </Router>
  );
}

export default App;