import logo from './logo.jpg';
import './App.css';
import TopBar from "./view/TopBar";

function App() {
  return (
    <div>

<TopBar />
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          上海镇西国际物流有限公司
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          详情点击
        </a>
      </header>
    </div>
    </div>
  );
}

export default App;
