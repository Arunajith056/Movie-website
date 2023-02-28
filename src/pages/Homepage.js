
import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from "../components/carousel";
import { Carousel10 as ImageCarousel } from '../components/ImageCarousel';




 
function Homepage () {
  const images=[
    "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
    
    <img
      src="https://via.placeholder.com/150x150.png?text=Image+1"
      alt="carous"
    />,
  
    <img
      src="https://via.placeholder.com/150x150.png?text=Image+2"
      alt="carouse"
    />,
  
    <img
      src="https://via.placeholder.com/150x150.png?text=Image+3"
      alt="carouse"
    />,


    <img
      src="https://via.placeholder.com/150x150.png?text=Image+4"
      alt="carouse"
    />,
  
  
    <img
      src="https://via.placeholder.com/150x150.png?text=Image+5"
      alt="carous"
    />
  ];
    
  

 
  return (
    <div>
      <section>
      <div className='main_body'>
      <div class="primary-navigation" data-tilt data-tilt-max="10" data-tilt-speed="100" data-tilt-perspective="700">
      <div class="logo">
         <h1>AJ <span>Movies</span></h1>
          </div>
       <div id="toggle_menu" >
      <ul class="list mobile_list">
          <li> <Link to="/">Home</Link></li>
             <li> <Link to="/movies">Movies</Link></li>
           <li><Link to="/tv&shows">TV &amp; Shows</Link></li>
            <li> <Link to="/music">Music</Link></li>
       </ul></div>
       <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="search" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
          <span class="input-group-text" id="basic-addon2"><i class="fa-solid fa-magnifying-glass"></i></span>
        </div>
        <div class="notifications">
       <div class="notify_icon"><i class="fa-sharp fa-solid fa-bell"></i></div>
           <span class="badge">3</span>
             </div>
            <img src='https://images.unsplash.com/photo-1515986138552-12806d2a87a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80'alt='' class="avatar"/>
         <span class="down" ><i class="fa-solid fa-caret-down"></i></span></div> 
          
         <div class="side_info">
     <Link class="side_infotext">
        <li>-New</li>
        <li>-popular</li>
        <li></li>
      <li>.4k 10bit</li>
       </Link>
    </div>


      
      <div class="text_container">
  <h1>
    Your Downloading guide for movies, TV shows & Music
  </h1>
  <p>Find where to Download new, popular & upcoming entertainment with <span>A</span>J Media.</p>
    <button class="Explore">Explore</button>
</div>
   </div>
    </section>
    <section2 className='cards_top'>
    <div class="three_cards">
  <div class="card1">
    <div class="images_card1">
      <img src='https://hips.hearstapps.com/hmg-prod/images/movies-based-on-true-stories-lead-1589926406.jpg?resize=1200:*'alt='' class='inside_image'></img>
    </div>
    <h1>watch favorite movies</h1>
    <p>Get personal recommendations for all your favorite movies. We’ll show you where to download movies, TV shows & music.</p>
  </div>
  <div class="card2">
    <div class="images_card2">
      <img src='https://media.gqindia.com/wp-content/uploads/2019/11/top-image19-1920x1080.jpg'alt='' class="inside_image2"></img></div>
    <h1>TV shows & web series</h1>
    <p >"Keep smiling, because life is a beautiful thing and there's so much to smile about. - ..."-need more like this,Then Download the tv shows and get the life lesson.</p> 
  </div>
  <div class="card3">
    <div class="images_card3">
      <img src='https://arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/W6MQRHV3WYRDBRWZRFDB7MPK4Y.jpg'alt=''  class="inside_image3"></img>
    </div>
    <h1>Listen it & Enjoy it</h1>
    <p>“Music brings a warm glow to my vision, thawing mind and muscle from their endless wintering.”–.</p>
  </div>
</div>
    </section2>
    <section3>
        <div className='card_slider'>
        <div class="image_slidertext">
         <h1>Browse popular Movies,Tv shows&music</h1>
           </div>
           <div class="image_slider1">
  <div class="text_imageslider1">
    <h2>Top Movies</h2>
    <p>Check out this week’s <span> most popular movies</span> and find out where <span>to download them.</span></p>
  </div>
  <div class="slider">
    <div class="cards">
    <div class="imageslider_reactslick01">
    <ImageCarousel images={images} />
    </div>
     
             </div>
             </div>
        </div></div>
    </section3>
    <section4>
      <>
      <div class="image_slider1">
    <div class="text_imageslider1">
      <h2>Tv Shows</h2>
      <p>Check out the<span> most popular Tv shows</span> and find out where <span>to download them.</span></p>
    </div>
    <div class="slider">
    <div class="cards">
    <div class="imageslider_reactslick01">
    <ImageCarousel images={images} />
    </div>
     
             </div>
             </div>
       
    </div>
      </>

    </section4>
    <section5>
      

    <div className='carousel_container'>
    <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
    <div className='carosel_bgimage'>
      <img src="https://images.thequint.com/thequint%2F2022-12%2F4dc68be4-e7da-47e1-ba9f-b1bb56408aaa%2Fp23063502_b_h8_ab.jpg" class="d-block w-100" alt="wednesday"/></div>
      <div class="carousel-caption">
        <div className='innerpart_carousel'>
          <div className='innerpart_image'>
            <img src='https://upload.wikimedia.org/wikipedia/en/6/66/Wednesday_Netflix_series_poster.png'alt=''/>
          </div>
          <div className='innerpart_text'>
        <h1>wednesday<hr/></h1>
        <div className='textinner'>
        <div className='textofinnerpat'>
          <div className='textofinnerpartleft'><p>RATING:</p></div>
          <div className='textofinnerpartright'><p><span className='first_letter'>A</span>J Rating96%
          <span className='imbdimg'><a href='https://www.imdb.com/title/tt13443470/?ref_=fn_al_tt_1'><img src='https://ia.media-imdb.com/images/M/MV5BODc4MTA3NjkzNl5BMl5BcG5nXkFtZTgwMDg0MzQ2OTE@._V1_.png'alt=''/></a></span>8.2 (276k)</p></div></div>
           <div className='textofinnerpat'>
          <div className='textofinnerpartleft'><p>GENRES:</p></div>
          <div className='textofinnerpartright'><p>Science-Fiction, Horror,Kids & Family,<br/> ComedyCrime, Fantasy</p></div></div><div className='textofinnerpat'>
          <div className='textofinnerpartleft'><p>RUNTIME:</p></div>
          <div className='textofinnerpartright '><p>49min</p> <button class='downloadbtn'><i class="fa-sharp fa-solid fa-arrow-right"></i><h1>Download Now</h1></button></div>
    </div></div></div></div></div></div>
    <div class="carousel-item" data-bs-interval="2000">
    <div className='carosel_bgimage'>
      <img src="https://st1.bollywoodlife.com/wp-content/uploads/2023/01/Farzi-Trailr.png?impolicy=Medium_Widthonly&w=1280&h=900" alt="FRAZI"/></div>
      <div class="carousel-caption">
        <div className='innerpart_carousel'>
          <div className='innerpart_image'>
            <img src='https://images.lifestyleasia.com/wp-content/uploads/sites/7/2023/01/06104849/Farzi-4.jpg'alt=''/>
          </div>
          <div className='innerpart_text'>
        <h1>Farzi<hr/></h1>
        <div className='textinner'>
        <div className='textofinnerpat'>
          <div className='textofinnerpartleft'><p>RATING:</p></div>
          <div className='textofinnerpartright'><p><span className='first_letter'>A</span>J Rating90%
<span className='imbdimg'><a href='https://www.imdb.com/title/tt15477488/?ref_=nv_sr_srsg_2'><img src='https://ia.media-imdb.com/images/M/MV5BODc4MTA3NjkzNl5BMl5BcG5nXkFtZTgwMDg0MzQ2OTE@._V1_.png'alt=''/></a></span>8.6 (8k)</p></div></div>
           <div className='textofinnerpat'>
          <div className='textofinnerpartleft'><p>GENRES:</p></div>
          <div className='textofinnerpartright'><p>Drama, Mystery & Thriller, Crime<br/></p></div></div><div className='textofinnerpat'>
          <div className='textofinnerpartleft'><p>RUNTIME:</p></div>
          <div className='textofinnerpartright'><p>57min</p> <button class="downloadbtn"><i class="fa-sharp fa-solid fa-arrow-right"></i><h1>Download Now</h1></button></div>
    </div></div></div></div></div></div>
    <div class="carousel-item">
    <div className='carosel_bgimage'>
      <img src="https://m.media-amazon.com/images/M/MV5BNTg3NjcxYzgtYjljNC00Y2I2LWE3YmMtOTliZTkwYTE1MmZiXkEyXkFqcGdeQXVyNTY4NDc5MDE@._V1_.jpg" alt="wednesday"/></div>
      <div class="carousel-caption">
        <div className='innerpart_carousel'>
          <div className='innerpart_image'>
            <div className='imageforfull'>
            <img src='https://m.media-amazon.com/images/M/MV5BNTg3NjcxYzgtYjljNC00Y2I2LWE3YmMtOTliZTkwYTE1MmZiXkEyXkFqcGdeQXVyNTY4NDc5MDE@._V1_.jpg'alt=''/></div>
          </div>
          <div className='innerpart_text'>
        <h1>The Rings of Power<hr/></h1>
        <div className='textinner'>
        <div className='textofinnerpat'>
          <div className='textofinnerpartleft'><p>RATING:</p></div>
          <div className='textofinnerpartright'><p><span className='first_letter'>A</span>J Rating96%
          <span className='imbdimg'><a href='https://www.imdb.com/title/tt7631058/?ref_=nv_sr_srsg_0'><img src='https://ia.media-imdb.com/images/M/MV5BODc4MTA3NjkzNl5BMl5BcG5nXkFtZTgwMDg0MzQ2OTE@._V1_.png'alt=''/></a></span>8.2 (276k)</p></div></div>
           <div className='textofinnerpat'>
          <div className='textofinnerpartleft'><p>GENRES:</p></div>
          <div className='textofinnerpartright'><p>Science-Fiction, Horror,Kids & Family,<br/> ComedyCrime, Fantasy</p></div></div><div className='textofinnerpat'>
          <div className='textofinnerpartleft'><p>RUNTIME:</p></div>
          <div className='textofinnerpartright'><p>49min</p> <button class="downloadbtn"><i class="fa-sharp fa-solid fa-arrow-right"></i><h1>Download Now</h1></button></div>
    </div></div></div></div></div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div></div>
          
     
   </section5>
    <section6>
       <><div className='top_picks'>
       <div class="container-fluid">
  <h1 class="text-center mb-3">Bootstrap Multi-Card Carousel</h1>
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner row w-100 mx-auto">
      <div class="carousel-item col-md-4 active">
        <div class="card">
    
          <img class="card-img-top img-fluid" src="" alt=''/>
          <div class="card-body">
            <h4 class="card-title">Card 1</h4>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
      <div class="carousel-item col-md-4">
        <div class="card">
          <img class="card-img-top img-fluid" src="https://picsum.photos/seed/2/800/600" alt=''/>
          <div class="card-body">
            <h4 class="card-title">Card 2</h4>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
      <div class="carousel-item col-md-4">
        <div class="card">
          <img class="card-img-top img-fluid" src="https://picsum.photos/seed/3/800/600" alt=''/>
          <div class="card-body">
            <h4 class="card-title">Card 3</h4>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
      <div class="carousel-item col-md-4">
        <div class="card">
          <img class="card-img-top img-fluid" src="https://picsum.photos/seed/4/800/600" alt=''/>
          <div class="card-body">
            <h4 class="card-title">Card 4</h4>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
      <div class="carousel-item col-md-4">
        <div class="card">
          <img class="card-img-top img-fluid" src="https://picsum.photos/seed/5/800/600" alt=''/>
          <div class="card-body">
            <h4 class="card-title">Card 5</h4>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
      <div class="carousel-item col-md-4">
        <div class="card">
          <img class="card-img-top img-fluid" src="https://picsum.photos/seed/6/800/600" alt=''/>
          <div class="card-body">
            <h4 class="card-title">Card 6</h4>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
      <div class="carousel-item col-md-4">
        <div class="card">
          <img class="card-img-top img-fluid" src="https://picsum.photos/seed/7/800/600" alt=''/>
          <div class="card-body">
            <h4 class="card-title">Card 7</h4>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>

      
      

      </div>
      </>
    </section6>
    <section7>
          <>
          <div className='farmermotion'>
      <h1>Top pick's of AJ</h1>
      <Carousel images={images} />
      <div className='commentbox'>
        <div class="commentbox_inside"><h5>user</h5>
      <p>Last updated 2 days ago...</p></div>
        <input/>
      </div>
      </div>
      
        
          </>
   </section7>
   <section>
    
   </section>
    </div>
  );
}

export default Homepage
