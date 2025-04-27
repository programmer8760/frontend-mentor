//import { useState } from 'react';
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

  return (
    <div className='relative min-h-screen min-w-screen overflow-y-auto overflow-x-hidden flex flex-col items-center font-[Inconsolata] text-neutral-0 gap-y-3'>
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

      <div className='relative flex items-start w-[90vw] sm:w-[50vw] md:w-[40vw]'>
        <p className='text-xl sm:text-2xl'>Upload Avatar</p>
      </div>
      <div className='relative bg-neutral-700/40 border-2 border-dashed border-neutral-500/50 rounded-2xl w-[90vw] sm:w-[50vw] md:w-[40vw] min-h-30 max-h-40 h-[20vh] flex flex-col items-center'>
        <div className='relative mt-5 min-w-6 min-h-6 w-12 h-12 bg-no-repeat rounded-xl bg-center bg-neutral-700/40 border border-neutral-700' style={{ backgroundImage: `url("${iconUpload}")` }} />
        <p className='relative text-neutral-300 mt-[4vh] text-center'>Drag and drop or click to upload</p>
      </div>

      <div className='relative -mt-4 flex items-center w-[90vw] sm:w-[50vw] md:w-[40vw]'>
        <div className='bg-no-repeat bg-center w-10 h-10' style={{ backgroundImage: `url("${iconInfo}")` }} />
        <p className='text-neutral-300 text-xs'>Upload your photo (JPG or PNG, max size: 500KB)</p>
      </div>

      <div className='relative flex items-start w-[90vw] sm:w-[50vw] md:w-[40vw]'>
        <p className='text-xl sm:text-2xl'>Full Name</p>
      </div>

      <input type="text" className="relative border border-neutral-500 bg-neutral-700/40 rounded-xl w-[90vw] sm:w-[50vw] md:w-[40vw] h-12" />

      <div className='relative flex items-start w-[90vw] sm:w-[50vw] md:w-[40vw]'>
        <p className='text-xl sm:text-2xl'>Email Address</p>
      </div>

      <input type="text" className="relative px-5 border border-neutral-500 bg-neutral-700/40 rounded-xl w-[90vw] sm:w-[50vw] md:w-[40vw] h-12" placeholder='example@email.com'/>

      <div className='relative flex items-start w-[90vw] sm:w-[50vw] md:w-[40vw]'>
        <p className='text-xl sm:text-2xl'>GitHub Username</p>
      </div>

      <input type="text" className="relative px-5 border border-neutral-500 bg-neutral-700/40 rounded-xl w-[90vw] sm:w-[50vw] md:w-[40vw] h-12" placeholder='@yourusername'/>

      <button className='relative bg-orange-500 text-neutral-900 font-[Inconsolata-ExtraBold] rounded-xl w-[90vw] sm:w-[50vw] md:w-[40vw] h-12' type='submit'>Generate My Ticket</button>

    </div> 
  );
}

export default App;
