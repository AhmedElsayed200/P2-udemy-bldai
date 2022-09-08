import './App.css';
import "./Resources/Styling/index.css"
import Navbar from './Components/Navbar';
import HomePage from './Pages/Home Page';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
