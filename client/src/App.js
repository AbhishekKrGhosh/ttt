import './App.css';
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import Profile from './components/Profile';

function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Profile/>
      <div className='btnPosts'>134 Posts</div>
      <div className='line'>
      <div className='line1'></div>
      <div className='line2'></div>
      </div>
      <Posts/>

    </div>
  );
}

export default App;
