import HomePage from './pages/homePage';
import Layout from './global/layout';
import './style/style.css';

function App() {
  return (
    <div className="App">
        <Layout>
          <HomePage></HomePage>
        </Layout>
    </div>
  );
}

export default App;
