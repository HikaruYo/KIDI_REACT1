import logo from './logo.svg';
import './App.css';
// import Hello from './components/hello';
import World from './components/hello';
// Pada bagian import, kita bisa custom namanya sesuai keinginan
import Welcome from './components/welcome';

function App() {
  return (
    <div className="App">
      <World></World>
      <Welcome></Welcome>
    </div>
  );
}

export default App;
