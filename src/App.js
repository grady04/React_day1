
import './App.css';
import NavBar from './components/NavBar'
import BookCard from './components/bookCard'

function App() {
  return (
    <div className="App">
      <NavBar>
        <BookCard color="primary"></BookCard>
      </NavBar>
    </div>
  );
}

export default App;
