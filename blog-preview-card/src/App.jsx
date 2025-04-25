import articleImg from './assets/images/illustration-article.svg';
import avatar from './assets/images/image-avatar.webp';
import './App.css';

function App() {

  return (
    <div className='cardContainer'>
     <div className='card'>
        <div className='imageContainer'>
          <img src={articleImg} className='articleImage' />
        </div>
        <div className='tagBar'>
         <p className='tag'>Learning</p>
        </div>
        <p className='publishDate'>Published 21 Dec 2023</p>
        <p className='articleTitle'>HTML & CSS foundations</p>
        <p className='articleDescription'>These languages are the backbone of every website, defining structure, content, and presentation.</p>
        <div className='author'>
          <img src={avatar} className='authorAvatar' />
          <p className='authorName'>Greg Hooper</p>
        </div>
     </div>
    </div>
  );
}

export default App;
