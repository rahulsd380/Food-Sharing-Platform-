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
            <img className="px-2 w-5/6" src="https://i.ibb.co/HP5q4Rk/1.jpg" alt="" />
          </div>

          <div>
          <img className="px-2 w-5/6" src="https://i.ibb.co/qxzKtpP/2.jpg" alt="" />
          </div>

          <div>
          <img className="px-2 w-5/6" src="https://i.ibb.co/k1P5QVt/3.jpg" alt="" />
          </div>

          <div>
          <img className="px-2 w-5/6" src="https://i.ibb.co/VNK4RDF/4.jpg" alt="" />
          </div>

          <div>
          <img className="px-2 w-5/6" src="https://i.ibb.co/S5Dhkt7/5.jpg" alt="" />
          </div>

          <div>
          <img className="px-2 w-5/6" src="https://i.ibb.co/1dNmLsP/6.jpg" alt="" />
          </div>

          <div>
            <img className="px-2 w-5/6" src="https://i.ibb.co/WFYQdnq/7.jpg" alt="" />
          </div>

          <div>
          <img className="px-2 w-5/6" src="https://i.ibb.co/B4sqRM1/8.jpg" alt="" />
          </div>

          <div>
          <img className="px-2 w-5/6" src="https://i.ibb.co/kcG9rxL/9.jpg" alt="" />
          </div>

          <div>
          <img className="px-2 w-5/6" src="https://i.ibb.co/fGqznnG/10.jpg" alt="" />
          </div>

          <div>
          <img className="px-2 w-5/6" src="https://i.ibb.co/6rhXVLp/11.jpg" alt="" />
          </div>

          <div>
          <img className="px-2 w-5/6" src="https://i.ibb.co/mBr6dF2/12.jpg" alt="" />
          </div>

          <div>
          <img className="px-2 w-5/6" src="https://i.ibb.co/5np85ys/13.jpg" alt="" />
          </div>

          <div>
          <img className="px-2 w-5/6" src="https://i.ibb.co/txsry5f/14.jpg" alt="" />
          </div>

        </Slider>
      </div>
    );
  }
}