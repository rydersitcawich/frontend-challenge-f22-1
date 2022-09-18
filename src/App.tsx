import './App.css';
import {Nav} from './components/Nav';
import {Courses} from './pages/Courses';
import {Route, Routes} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import { Receipt } from './pages/Receipt'; 
import { ShoppingCartProvider } from './context/ShoppingCartContext';

function App() {
  return (
    <ShoppingCartProvider>
    <Container className = 'mb-4 p-0'>
        <Nav/>
        <Routes>
          {/* react rounter routes */}
          <Route path = '/' element={<Courses/>}/>
          <Route path = '/receipt' element={<Receipt/>}/>
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
