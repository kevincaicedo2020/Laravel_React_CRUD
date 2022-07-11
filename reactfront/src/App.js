import './App.css';
import ViewProducts from './componentes/ViewProducts';
import CreateProducts from './componentes/CreateProducts';
import EditProducts from './componentes/EditProducts';
import React, { BrowserRouter,Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ViewProducts />} />
        <Route path='/create' element={<CreateProducts />} />
        <Route path='/edit/:id' element={<EditProducts />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
