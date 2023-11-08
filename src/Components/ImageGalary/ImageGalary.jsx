import { Component } from "react";
import Slider from "react-slick";
import { LuHelpingHand } from "react-icons/lu";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 8000,
      autoplaySpeed: 100,
      cssEase: "linear"
    };
    return (
      <div className="py-10 max-w-6xl mx-auto">
        <div className="flex gap-3">
            <LuHelpingHand className="text-4xl font-bold dark:text-blue-500"></LuHelpingHand>
        <h2 className="text-3xl font-bold mb-7 dark:text-blue-500">Please Help Us!!</h2>
        </div>
        <Slider {...settings}>
            
          <div>
            <img className="px-2 w-5/6" src="/src/assets/images/Image-Galary/1.jpg" alt="" />
          </div>

          <div>
          <img className="px-2 w-5/6" src="/src/assets/images/Image-Galary/2.jpg" alt="" />
          </div>

          <div>
          <img className="px-2 w-5/6" src="/src/assets/images/Image-Galary/3.jpg" alt="" />
          </div>

          <div>
          <img className="px-2 w-5/6" src="/src/assets/images/Image-Galary/4.jpg" alt="" />
          </div>

          <div>
          <img className="px-2 w-5/6" src="/src/assets/images/Image-Galary/5.jpg" alt="" />
          </div>

          <div>
          <img className="px-2 w-5/6" src="/src/assets/images/Image-Galary/6.jpg" alt="" />
          </div>

          <div>
            <img className="px-2 w-5/6" src="/src/assets/images/Image-Galary/7.jpg" alt="" />
          </div>

          <div>
          <img className="px-2 w-5/6" src="/src/assets/images/Image-Galary/8.jpg" alt="" />
          </div>

          <div>
          <img className="px-2 w-5/6" src="/src/assets/images/Image-Galary/9.jpg" alt="" />
          </div>

          <div>
          <img className="px-2 w-5/6" src="/src/assets/images/Image-Galary/10.jpg" alt="" />
          </div>

          <div>
          <img className="px-2 w-5/6" src="/src/assets/images/Image-Galary/11.jpg" alt="" />
          </div>

          <div>
          <img className="px-2 w-5/6" src="/src/assets/images/Image-Galary/12.jpg" alt="" />
          </div>

          <div>
          <img className="px-2 w-5/6" src="/src/assets/images/Image-Galary/13.jpg" alt="" />
          </div>

          <div>
          <img className="px-2 w-5/6" src="/src/assets/images/Image-Galary/14.jpg" alt="" />
          </div>

        </Slider>
      </div>
    );
  }
}