import React, { useRef, useState, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';

function Carousel() {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef();

  useLayoutEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);

  return (
    <div className='main-part'>
      <motion.div className='carousel2'>
        <motion.div drag='x' dragConstraints={{ right: 0, left:-width }} className='inner-carousel' ref={carouselRef}>
          <div className='item'>
            <div className='image-container2'>
            <div class="container2">
            <img src='https://images.squarespace-cdn.com/content/v1/5c75dfa97d0c9166551f52b1/9351f4e2-94f9-42e2-81df-003d5fe7b8e0/9964546b0ba1f6e14a6045e34b341f8ca2a3569752c5afed95b89682fcde1a68._RI_V_TTW_.jpg' alt='shawshank' />
  <div class="overlay">
  <a href="#/" class="icon" title="Add to watchlist">
  <i class="fa-solid fa-plus"></i>
  </a>
  </div>
</div>
              
        <div className='caption5'><div class="icon5">
          <div class="share_icon"><i class="fa-solid fa-share"></i>
          <i class="fa-regular fa-heart"></i></div>
          <div class="download_icon"><i class="fa-solid fa-download"></i></div></div></div>
            </div>


            <div className='image-container2 .container234'>
            <div class="container2">
            <img src='https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_.jpg' alt='The wolf of wall street' />
  <div class="overlay">
  <a href="#/" class="icon" title="Add to watchlist">
  <i class="fa-solid fa-plus"></i>
  </a>
  </div>
</div>
                 
        <div className='caption5'><div class="icon5">
          <div class="share_icon"><i class="fa-solid fa-share"></i>
          <i class="fa-regular fa-heart"></i></div>
          <div class="download_icon"><i class="fa-solid fa-download"></i></div></div></div>
            </div>

            <div className='image-container2'>
            <div class="container2">
            <img src='https://asiankhel.com/wp-content/uploads/2023/01/Farzi-Hindi-Web-Series-1024x1024.jpeg' alt='farzi' />
  <div class="overlay">
  <a href="#/" class="icon" title="Add to watchlist">
  <i class="fa-solid fa-plus"></i>
  </a>
  </div>
</div>
                    
        <div className='caption5'><div class="icon5">
          <div class="share_icon"><i class="fa-solid fa-share"></i>
          <i class="fa-regular fa-heart"></i></div>
          <div class="download_icon"><i class="fa-solid fa-download"></i></div></div></div>
            </div>

            <div className='image-container2'>
            <div class="container2">
            <img src='https://m.media-amazon.com/images/M/MV5BMzRjZWVmMzItNTdmYS00OWEzLTgyOGUtNThiNTU2ZThlYjY0XkEyXkFqcGdeQXVyMTIxMDk2NDE4._V1_.jpg' alt='famliy man' />
  <div class="overlay">
  <a href="#/" class="icon" title="Add to watchlist">
  <i class="fa-solid fa-plus"></i>
  </a>
  </div>
</div>
                    
        <div className='caption5'><div class="icon5">
          <div class="share_icon"><i class="fa-solid fa-share"></i>
          <i class="fa-regular fa-heart"></i></div>
          <div class="download_icon"><i class="fa-solid fa-download"></i></div></div></div>
            </div>

            <div className='image-container2'>
            <div class="container2">
            <img src='https://assets-prd.ignimgs.com/2021/09/15/moneyheist-1631728690722.png' alt='money heist' />
  <div class="overlay">
  <a href="#/" class="icon" title="Add to watchlist">
  <i class="fa-solid fa-plus"></i>
  </a>
  </div>
</div>
                 
        <div className='caption5'><div class="icon5">
          <div class="share_icon"><i class="fa-solid fa-share"></i>
          <i class="fa-regular fa-heart"></i></div>
          <div class="download_icon"><i class="fa-solid fa-download"></i></div></div></div>
            </div>

            <div className='image-container2'>
              <div class="container2">
            <img src='https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg' alt='harry potter' />
  <div class="overlay">
  <a href="#/" class="icon" title="Add to watchlist">
    <i class="fa-solid fa-plus"></i>
  </a>
  </div>
</div>
                   
        <div className='caption5'><div class="icon5">
          <div class="share_icon"><i class="fa-solid fa-share"></i>
          <i class="fa-regular fa-heart"></i></div>
          <div class="download_icon"><i class="fa-solid fa-download"></i></div></div></div>
            </div>

            <div className='image-container2'>
              <div class="container2">
            <img src='https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg' alt='inception' />
  <div class="overlay">
  <a href="#/" class="icon" title="Add to watchlist">
  <i class="fa-solid fa-plus"></i>
  </a>
  </div>
</div>
                   
        <div className='caption5'><div class="icon5">
          <div class="share_icon"><i class="fa-solid fa-share"></i>
          <i class="fa-regular fa-heart"></i></div>
          <div class="download_icon"><i class="fa-solid fa-download"></i></div></div></div>
            </div>

            <div className='image-container2'>
              <div class="container2">
            <img src='https://flxt.tmsimg.com/assets/p34434_p_v13_bc.jpg' alt='van helsing' />
  <div class="overlay">
  <a href="#/" class="icon" title="Add to watchlist">
  <i class="fa-solid fa-plus"></i>
  </a>
  </div>
</div>
                    
        <div className='caption5'><div class="icon5">
          <div class="share_icon"><i class="fa-solid fa-share"></i>
          <i class="fa-regular fa-heart"></i></div>
          <div class="download_icon"><i class="fa-solid fa-download"></i></div></div></div>
            </div>

            <div className='image-container2'>
              <div class="container2">
            <img src='https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg' alt='john wick' />
  <div class="overlay">
  <a href="#/" class="icon" title="Add to watchlist">
  <i class="fa-solid fa-plus"></i>
  </a>
  </div>
</div>
                    
        <div className='caption5'><div class="icon5">
          <div class="share_icon"><i class="fa-solid fa-share"></i>
          <i class="fa-regular fa-heart"></i></div>
          <div class="download_icon"><i class="fa-solid fa-download"></i></div></div></div>
            </div>

            <div className='image-container2'>
              <div class="container2">
            <img src='https://m.media-amazon.com/images/M/MV5BZmI1ZGRhNDYtOGVjZC00MmUyLThlNTktMTQyZGE3MzE1ZTdlXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_FMjpg_UX1000_.jpg' alt='resisdent evil' />
  <div class="overlay">
  <a href="#/" class="icon" title="Add to watchlist">
  <i class="fa-solid fa-plus"></i>
  </a>
  </div>
</div>
                   
        <div className='caption5'><div class="icon5">
          <div class="share_icon"><i class="fa-solid fa-share"></i>
          <i class="fa-regular fa-heart"></i></div>
          <div class="download_icon"><i class="fa-solid fa-download"></i></div></div></div>
            </div>

            <div className='image-container2'>
              <div class="container2">
            <img src='https://resizing.flixster.com/0xxuABVVuzJrUT130WFHKE-irEg=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vNzUyMTFhOTktZTU4Ni00ODkyLWJlYjQtZTgxYTllZmU2OGM0LmpwZw==' alt='stanger things' />
  <div class="overlay">
  <a href="#/" class="icon" title="Add to watchlist">
  <i class="fa-solid fa-plus"></i>
  </a>
  </div>
</div>
                   
        <div className='caption5'><div class="icon5">
          <div class="share_icon"><i class="fa-solid fa-share"></i>
          <i class="fa-regular fa-heart"></i></div>
          <div class="download_icon"><i class="fa-solid fa-download"></i></div></div></div>
            </div>
            <div className='image-container2'>
              <div class="container2">
            <img src='https://m.media-amazon.com/images/M/MV5BMTQ2NTMxODEyNV5BMl5BanBnXkFtZTcwMDgxMjA0MQ@@._V1_.jpg' alt='tokyo drift'/>
  <div class="overlay">
  <a href="#/" class="icon" title="Add to watchlist">
  <i class="fa-solid fa-plus"></i>
  </a>
  </div>
</div>
                   
        <div className='caption5'><div class="icon5">
          <div class="share_icon"><i class="fa-solid fa-share"></i>
          <i class="fa-regular fa-heart"></i></div>
          <div class="download_icon"><i class="fa-solid fa-download"></i></div></div></div>
            </div>
            <div className='image-container2'>
              <div class="container2">
            <img src='https://onlookersmedia.in/wp-content/uploads/2019/05/Second-look-of-Karthi-starrer-Kaithi-2.jpg' alt='kaithi' />
  <div class="overlay">
  <a href="#/" class="icon" title="Add to watchlist">
  <i class="fa-solid fa-plus"></i>
  </a>
  </div>
</div>
                   
        <div className='caption5'><div class="icon5">
          <div class="share_icon"><i class="fa-solid fa-share"></i>
          <i class="fa-regular fa-heart"></i></div>
          <div class="download_icon"><i class="fa-solid fa-download"></i></div></div></div>
            </div>

          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Carousel;
