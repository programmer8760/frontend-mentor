import { useState, useRef } from 'react';
import './App.css';
import desktopBG from './assets/images/background-desktop.png';
import linesBG from './assets/images/pattern-lines.svg';
import circleBG from './assets/images/pattern-circle.svg';
import lineTopBG from './assets/images/pattern-squiggly-line-top.svg';
import lineBottomDesktopBG from './assets/images/pattern-squiggly-line-bottom-desktop.svg';
import lineBottomMobileBG from './assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg';
import logo from './assets/images/logo-full.svg';
import iconUpload from './assets/images/icon-upload.svg';
import iconInfo from './assets/images/icon-info.svg';

function App() {
  const [avatar, setAvatar] = useState(null);
  const [avatarError, setAvatarError] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const avatarInputRef = useRef(null);

  const handleAvatarChange = (e) => {
    if (e.target.files[0].size > 500000) {
      setAvatarError(true);
    } else {
      setAvatar(e.target.files[0]);
    }
  }
  const handleAvatarClick = () => {
    avatarInputRef.current.click();
  }
  const handleAvatarDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  }
  const handleAvatarDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files[0].size > 500000) {
      setAvatarError(true);
    } else {
      setAvatar(e.dataTransfer.files[0]);
    }
  }

  return (
    <div onDrop={(e) => e.preventDefault()} className='relative min-h-screen min-w-screen overflow-y-auto overflow-x-hidden flex flex-col items-center font-[Inconsolata] text-neutral-0 gap-y-3'>
      <div className='absolute inset-0 bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url("${desktopBG}")` }} />
      <div className='absolute inset-0 bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url("${linesBG}")` }} />

      <div className='absolute bg-contain bg-no-repeat
                      sm:-top-[6vw] sm:left-[6.5vw] sm:w-[15vw] sm:h-[15vw]
                      -top-[9vw] -left-[3vw] w-[32vw] h-[32vw]' style={{ backgroundImage: `url("${circleBG}")` }} />

      <div className='absolute bg-contain top-[5vw] right-0 bg-no-repeat w-[25vw] h-[25vw]' style={{ backgroundImage: `url("${lineTopBG}")` }} />

      <div className='absolute bg-contain bg-no-repeat
                      sm:bottom-[20vh] sm:right-[20vw] sm:w-[15vw] sm:h-[15vw]
                      bottom-[30vh] -right-[12vw] w-[32vw] h-[32vw]' style={{ backgroundImage: `url("${circleBG}")` }} />

      <div className='absolute bg-contain bottom-0 bg-no-repeat sm:hidden w-[100vw] h-[30vh]' style={{ backgroundImage: `url("${lineBottomMobileBG}")` }} />
      <div className='absolute bg-contain bottom-0 bg-no-repeat sm:w-[50vw] sm:h-[20vw] sm:left-0 sm:block hidden' style={{ backgroundImage: `url("${lineBottomDesktopBG}")` }} />

      <div className='absolute bg-contain bg-no-repeat bg-center w-50 h-10 mt-5' style={{ backgroundImage: `url("${logo}")` }} />

      <h1 className='relative mt-20 text-3xl md:text-6xl text-center font-[Inconsolata-ExtraBold]'>Your Journey to Coding Conf <br className='hidden sm:inline'/>2025 Starts Here!</h1>
      <p className='relative text-neutral-300 text-xl sm:text-2xl text-center max-w-80 sm:max-w-100 md:max-w-screen'>Secure your spot at next year's biggest coding conference.</p>

      <form className='relative flex flex-col items-center gap-y-3'>
        <div className='relative flex items-start w-[90vw] sm:w-[50vw] md:w-[40vw]'>
          <p className='text-xl sm:text-2xl'>Upload Avatar</p>
        </div>

        <input className='hidden' type='file' accept='image/jpeg, image/png' ref={avatarInputRef} onChange={handleAvatarChange} />
        <div onClick={avatar ? null : handleAvatarClick} onDragOver={handleAvatarDragOver} onDrop={handleAvatarDrop} className={`relative bg-neutral-700/40 border-2 border-dashed border-neutral-500/50 rounded-2xl w-[90vw] sm:w-[50vw] md:w-[40vw] min-h-30 max-h-40 h-[20vh] flex flex-col items-center group ${avatar ? '' : 'hover:cursor-pointer hover:bg-neutral-700/75'} ${isDragging ? 'outline-2 outline-offset-3 outline-neutral-500' : ''}`}>
          <div className={`relative mt-5 min-w-6 min-h-6 w-12 h-12 bg-no-repeat rounded-xl bg-center bg-neutral-700/40 border border-neutral-700 ${avatar ? 'bg-cover' : ' group-hover:bg-neutral-500/25 group-hover:border-neutral-500/75'}`} style={{ backgroundImage: `url("${avatar ? URL.createObjectURL(avatar) : iconUpload}")` }} />
          <p className={`relative text-neutral-300 mt-[4vh] text-center ${!avatar ? '' : 'hidden'}`}>Drag and drop or click to upload</p>
          <div className={`relative text-neutral-300 mt-[4vh] text-center gap-x-3 ${avatar ? 'flex' : 'hidden'}`}>
            <button onClick={() => setAvatar(null)} type='button' className='relative bg-neutral-700/50 rounded-sm border-5 border-l-10 border-r-10 border-neutral-700/0'>Remove image</button>
            <button onClick={handleAvatarClick} type='button' className='relative bg-neutral-700/50 rounded-sm border-5 border-l-10 border-r-10 border-neutral-700/0'>Change image</button>
          </div>
        </div>

        <div className={`relative -mt-4 flex items-center w-[90vw] sm:w-[50vw] md:w-[40vw] ${!avatarError ? '' : 'hidden'}`}>
          <div className='bg-no-repeat bg-center w-10 h-10' style={{ backgroundImage: `url("${iconInfo}")` }} />
          <p className='text-neutral-300 text-xs'>Upload your photo (JPG or PNG, max size: 500KB).</p>
        </div>

        <div className={`relative -mt-4 flex items-center w-[90vw] sm:w-[50vw] md:w-[40vw] ${avatarError ? '' : 'hidden'}`}>
          <div className='mask-no-repeat bg-orange-700 mask-center w-10 h-10' style={{ maskImage: `url("${iconInfo}")` }} />
          <p className='text-orange-700 text-xs'>File too large. Please upload a photo under 500KB.</p>
        </div>


       <div className='relative flex items-start w-[90vw] sm:w-[50vw] md:w-[40vw]'>
          <p className='text-xl sm:text-2xl'>Full Name</p>
       </div>

        <input type="text" id='fullName' className="relative px-5 border border-neutral-500 bg-neutral-700/40 rounded-xl w-[90vw] sm:w-[50vw] md:w-[40vw] h-12 hover:cursor-pointer hover:bg-neutral-700/75 focus:outline-2 focus:outline-offset-3 focus:outline-neutral-500" />

        <div className='relative flex items-start w-[90vw] sm:w-[50vw] md:w-[40vw]'>
          <p className='text-xl sm:text-2xl'>Email Address</p>
        </div>

        <input type="text" id='email' className="relative px-5 border border-neutral-500 bg-neutral-700/40 rounded-xl w-[90vw] sm:w-[50vw] md:w-[40vw] h-12 hover:cursor-pointer hover:bg-neutral-700/75 focus:outline-2 focus:outline-offset-3 focus:outline-neutral-500 placeholder:text-neutral-500" placeholder='example@email.com'/>

        <div className='relative flex items-start w-[90vw] sm:w-[50vw] md:w-[40vw]'>
          <p className='text-xl sm:text-2xl'>GitHub Username</p>
        </div>

        <input type="text" id='username' className="relative px-5 border border-neutral-500 bg-neutral-700/40 rounded-xl w-[90vw] sm:w-[50vw] md:w-[40vw] h-12 hover:cursor-pointer hover:bg-neutral-700/75 focus:outline-2 focus:outline-offset-3 focus:outline-neutral-500 placeholder:text-neutral-500" placeholder='@yourusername'/>

        <button className='relative bg-orange-500 text-neutral-900 font-[Inconsolata-ExtraBold] rounded-xl w-[90vw] sm:w-[50vw] md:w-[40vw] h-12 hover:cursor-pointer hover:bg-orange-700 hover:[box-shadow:inset_0_-5px_0_0_var(--color-orange-500)] focus:outline-2 focus:outline-offset-3 focus:outline-neutral-500' type='submit'>Generate My Ticket</button>
      </form>
    </div> 
  );
}

export default App;
