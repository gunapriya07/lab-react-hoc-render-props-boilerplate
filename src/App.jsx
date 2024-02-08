import './App.css';
import LikeImage1 from './components/LikeImage';
import LikePost2 from './components/LikePost';
import Likeimage3 from './components/project-render/Likeimage3';
import RenderProps from './components/project-render/RenderProps';
import LikePost3 from './components/project-render/LikePost3';

function App() {
  return (
    <div>
      <h3>Some Blog</h3>
      <div className='buttons'>
        <LikeImage1/>
        <LikePost2/>
      </div>
      <h3>Some More Blog</h3>
      <div className='buttons'>
        <RenderProps render={(count,handleCount)=>(
          <Likeimage3 count={count} handleCount={handleCount}/>
        )}/>
      <RenderProps render={(count, handleCount) => (<LikePost3 count= {count}handleCount={handleCount}/>)}/>
      </div>
    </div>
  );
}

export default App;
