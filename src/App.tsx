import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <BrowserRouter basename="/drizzlereact">
      <Routes>
        <Route path="/" element={<h1>Hello World from Drizzle React!</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
