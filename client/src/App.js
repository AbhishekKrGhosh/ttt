import './App.css';
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import Profile from './components/Profile';
import Record from './records.json'

function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Profile cover={Record.cover} profile={Record.profile} name={Record.name} followers={Record.followers} following={Record.following} details={Record.details} link={Record.link} star={Record.star} thumb={Record.thumb} view={Record.view} like={Record.like}/>
      <div className='btnPosts'>{Record.Posts} Posts</div>
      <div className='line'>
      <div className='line1'></div>
      <div className='line2'></div>
      </div>
      <Posts/>

    </div>
  );
}

export default App;
