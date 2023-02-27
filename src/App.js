import './App.css';
import Row from './components/Row';
import requests from './request';

function App() {
  return (
    <div className="App">
      <Row title='Trending' fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
