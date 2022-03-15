import './style.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';

const App = (props) => {
  return (
      <div>
        <Header />
        <div className='sidebar_main_container'>
          <Sidebar />
          <div className='content'>
            <Routes>
              <Route path="/" element={<Profile posts={props.posts} />} />
              <Route path="/messages" element={<Messages />} /> 
            </Routes>
          </div>
        </div>
      </div>
  )
}

export default App;