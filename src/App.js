import HomePage from './pages/homePage';
import ServicePage from './pages/servicesPage';
import ContactPage from './pages/contactPage';
import Layout from './global/layout';
import './style/style.css';
import {Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Layout>
          <Routes>
            <Route path='/' exact element={<HomePage/>}></Route>
            <Route path='/services' exact element={<ServicePage banner_title="Service Page"></ServicePage>}></Route>
            <Route path='/contact' exact element={<ContactPage banner_title="Contact Page"></ContactPage>}></Route>
          </Routes>
        </Layout>
    </div>
  );
}

export default App;
