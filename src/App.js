import './App.css';
import Api from './components/Api';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
     {/* <Likes/> */}
     <SearchBar/>
      <Api />
      
    </div>
  );
}

export default App;
