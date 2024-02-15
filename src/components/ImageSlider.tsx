import Slider from "@/styles/ImageSlider";
import imgslider_1 from '@/assets/imgslider_1.png'
import imgslider_2 from '@/assets/imgslider_2.png'
import imgslider_3 from '@/assets/imgslider_3.png'
import imgslider_4 from '@/assets/imgslider_4.png'
import { useEffect, useState } from "react";

const images = [imgslider_1, imgslider_2, imgslider_3, imgslider_4];

const ImageSlider = () => {
    const [activeIdx, setActiveIdx] = useState(0);

    useEffect(() => {
        const Timer = setInterval(() => {
            setActiveIdx((prev) => prev === 3 ? 0 : prev + 1);
        }, 4000);
        return () => clearInterval(Timer);
    }, []);

    return (
        <Slider>
            {
                images.map((item, index) => {
                    return(
                        <img className="slide" src={item} key={index}></img>
                    );
                })
            }
           <div>
                <div className="list">
                    <ul>
                        {
                            images.map((_, index) => {
                                return ( <li key={index} style={{backgroundColor : index === activeIdx ? '#E8E8E8' : ''}}></li> );
                            })
                        }
                    </ul>
                </div>
           </div>
        </Slider>  
    );
}

export default ImageSlider;