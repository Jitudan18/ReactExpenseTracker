import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';


function App() {
  return (
    <div>
     
    
     <Routes>
       <Route path="/" element={<Dashboard />}></Route>
     </Routes>
     
    </div>
  );
}

export default App;
