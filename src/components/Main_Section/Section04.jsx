import React from 'react';
import Img01 from '../../assets/img/Section04_1.png';
import Img02 from '../../assets/img//Section04_2.png';
import Img03 from '../../assets/img/Section04_3.png';
import Img04 from '../../assets/img/Section04_4.png';
import Img05 from '../../assets/img/Section04_5.png';
import Img06 from '../../assets/img//Section04_6.jpg';
import Img07 from '../../assets/img//Section04_7.jpg';
import Img08 from '../../assets/img/Section04_8.jpg';
import Img09 from '../../assets/img/Section04_9.png';
import Img10 from '../../assets/img/Section04_10.png';

const imgList_1 = [
    {
        img: Img01,
    },
    {
        img: Img02,
    },
    {
        img: Img03,
    },
    {
        img: Img04,
    },
    {
        img: Img05,
    }
];

const imgList_2 = [
    {
        img: Img06,
    },
    {
        img: Img07,
    },
    {
        img: Img08,
    },
    {
        img: Img09,
    },
    {
        img: Img10,
    }
];

const Section04 = () => {
    return (
        <div className='Section04_wrap'>
            <div className='header'>
                <h1>@fila_korea</h1>
            </div>
            <div className='main'>
                <div className='img_row'>
                    {imgList_1.map((product, index) => (
                        <div key={index} className="fila_img">
                            <img src={product.img} alt="" />
                        </div>
                    ))}
                </div>

                <div className='img_row'>
                    {imgList_2.map((product, index) => (
                        <div key={index} className="fila_img">
                            <img src={product.img} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Section04 ;
