import logo from './logo.svg';
import './App.css';

function App() {
  const list = ['HTML', 'CSS', 'JS', 'Git', 'Jest'];
  return (
    <div>
      {list.map((elem) => (
        <li>{elem}</li>
      ))}
    </div>
  );
}

export default App;
