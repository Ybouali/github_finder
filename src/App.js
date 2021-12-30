import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { GithubProvider } from './context/github/GithubContext'
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Alert from './components/layout/Alert'
import Notfound from './pages/Notfound';
import { AlertProvider } from './context/Alert/AlertContext';
import User from './pages/User';

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className='flex flex-col justify-between h-screen'>
            <Navbar />
            <main className='container mx-auto px-3 pb-12'>
              <Alert />
              <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/user/:login' element={<User />}/>
                <Route path='/notfound' element={<Notfound />}/>
                <Route path='/*' element={<Notfound />}/>
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
    </AlertProvider>
    </GithubProvider>
  );
}

export default App;
