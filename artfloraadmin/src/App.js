import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter } from 'react-router-dom';
import Main from './Component/Main';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <div className='appglass'>
          <Main/>
        </div>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
