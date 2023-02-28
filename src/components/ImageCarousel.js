import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export function Carousel10() {
  const settings = {
    dots:false,
    infinite: false,
    speed: 500,
    slidesToShow:10,
    slidesToScroll:5,
    autoplay: false,
    autoplaySpeed: 10,
    initialSlide: 0,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    
    responsive: [
      {
        breakpoint:1500,
        settings: {
          slidesToShow:6,
          slidesToScroll:3,
          initialSlide: 2,
        },
      },
      {
        breakpoint:1800,
        settings: {
          slidesToShow:8,
          slidesToScroll:5,
          initialSlide: 2,
        },
      },
      {
        breakpoint:950,
        settings: {
          slidesToShow:4,
          slidesToScroll:2,
          initialSlide: 2,
        },
      },
      {
        breakpoint:770,
        settings: {
          slidesToShow:3,
          slidesToScroll:1,
          initialSlide: 2,
        },
      },
      {
        breakpoint:590,
        settings: {
          slidesToShow:2,
          slidesToScroll:1,
          initialSlide: 2,
        },
      },
      {
        breakpoint:770,
        settings: {
          slidesToShow:3,
          slidesToScroll:1,
          initialSlide: 2,
        },
      },
      {
        breakpoint:400,
        settings: {
          slidesToShow:2,
          slidesToScroll:1,
          initialSlide: 2,
        },
      },
      {
        breakpoint:380,
        settings: {
          slidesToShow:1.5,
          slidesToScroll:1,
          initialSlide: 2,
        },
      },
      {
        breakpoint:1170,
        settings: {
          slidesToShow:5,
          slidesToScroll:2,
        },
      },
    ],
  };

  function PrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <i className="fa fa-chevron-left" />
      </div>
    );
  }

  function NextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <i className="fa fa-chevron-right" />
      </div>
    );
  }

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img
            src="https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg"
            alt="carous"
          />
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/714ZOEiVNtL._RI_.jpg"
            alt="carouse"
          />
        </div>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/f/fa/The_Aviator_%282004%29.png"
            alt="carouse"
          />
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg"
            alt="carouse"
          />
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"
            alt="carous"
          />
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_FMjpg_UX1000_.jpg"
            alt="carous"
          />
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg"
            alt="carous"
          />
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg"
            alt="carous"
          />
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/M/MV5BMTcyOTQ3NDA1OV5BMl5BanBnXkFtZTcwMDY3NzM4Mg@@._V1_.jpg"
            alt="carous"
          />
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/M/MV5BZmRjODgyMzEtMzIxYS00OWY2LTk4YjUtMGMzZjMzMTZiN2Q0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg"
            alt="carous"
          />
        </div>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/1416/8662/products/interstellar_2014_advance_original_film_art_682852f2-23f6-46de-a1db-4029d5b6f0b4_5000x.jpg?v=1574284010"
            alt="carous"
          />
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
            alt="carous"
          />
        </div>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/8/8f/Fast_and_Furious_Poster.jpg"
            alt="carous"
          />
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg"
            alt="carous"
          />
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/M/MV5BYTViNzMxZjEtZGEwNy00MDNiLWIzNGQtZDY2MjQ1OWViZjFmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
            alt="carous"
          />
        </div>
      </Slider>
    </div>
  );
}
