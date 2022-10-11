import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import reactlogo from "../assets/img/React.png";
import Node from "../assets/img/Node.png";
import js from "../assets/img/javascript.png";
import Photoshop from "../assets/img/photoshop.png";
import mongodb from "../assets/img/mongodb.png";
import Illustrator from "../assets/img/Illustrator.png";
import ae from "../assets/img/After effect.png";
import figma from "../assets/img/Figma.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I have good command in the Web development as well in the Graphics and Video Editing Skills.
                        My personal favorite Adobe Softwares are Photoshop, Illustrator, After Effect and XD. 
                        I am also well skilled in design the UI/UX from figma and XD.     
                        </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={reactlogo} alt="Image" />
                                <h5>ReactJS</h5>
                            </div>
                            <div className="item">
                                <img src={Node} alt="Image" />
                                <h5>NodeJS</h5>
                            </div>
                            <div className="item">
                                <img src={js} alt="Image" />
                                <h5>Java Script</h5>
                            </div>
                            <div className="item">
                                <img src={mongodb} alt="Image" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={Photoshop} alt="Image" />
                                <h5>PhotoShop</h5>
                            </div>
                            <div className="item">
                                <img src={Illustrator} alt="Image" />
                                <h5>Illustrator</h5>
                            </div>
                            <div className="item">
                                <img src={ae} alt="Image" />
                                <h5>After Effect</h5>
                        </div>
                        <div className="item">
                        <img src={figma} alt="Image" />
                        <h5>Figma</h5>
                </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
