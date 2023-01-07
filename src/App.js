
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './signin/Signin';
import Register from './register/Register';
import Todo from './todo/Todo';
import AddItem from './addItem/AddItem';
function App() {
  return (
    <div className="App">
      
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Register/>}/>
        <Route path="/todo" element={<Todo/>} />
        <Route path="/additem" element={<AddItem/>} />
      </Routes>  


    </BrowserRouter>
       
    </div>
  );
}

export default App;
