import './Hero.css';
import headphone from "../../assets/vibrating-headphone.png";


const Hero = () => {
    return(
    <div className='hero-container'>
       <span className='hero-container--text'>
            <p> 100 Thousand Songs, ad-free</p>
            <p> Over thousands podcast episode</p>
       </span>
       <img className="hero-container--img" src={headphone} alt='headphone-image' />
    </div>
    )

};


export default Hero;



