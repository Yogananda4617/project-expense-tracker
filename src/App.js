import './App.css';
import Main from './components/Main';
import { HiOutlineCurrencyRupee } from 'react-icons/hi';


function App() {

  return (
    <>
    <h1><span className='icon'><HiOutlineCurrencyRupee/></span>EXPENSE TRACKER<span className='icon'><HiOutlineCurrencyRupee/></span></h1>
  <Main />
  </>
  );
}

export default App;
