import {BrowserRouter, Routes, Route} from 'react-router-dom';

// Install react-router-dom

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<div>Home Page.</div>} />
      <Route  path="testing" element={<h2>Hello There.</h2>} />
    </Routes>
  </BrowserRouter>);
}

export default App;