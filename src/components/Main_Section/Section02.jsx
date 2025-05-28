import React from 'react';
import Img01 from '../../assets/img/Section02_1.png';
import Img02 from '../../assets/img/Section02_2.png';
import Img03 from '../../assets/img/Section02_3.png';
import Img04 from '../../assets/img/Section02_4.png';
import Img05 from '../../assets/img/Section02_5.png';

const productList = [
    {
        img: Img01,
        info: '공용 컴포트핏 라이프스타일',
        name: '<COOL WAVE> 그래픽 프린트 냉감 티셔츠',
        price: '49,000원',
    },
    {
        img: Img02,
        info: '공용 컴포트핏 라이프스타일',
        name: '<COOL WAVE> 그래픽 프린트 냉감 티셔츠',
        price: '49,000원',
    },
    {
        img: Img03,
        info: '공용 컴포트핏 라이프스타일',
        name: '<COOL WAVE> 그래픽 프린트 냉감 티셔츠',
        price: '49,000원',
    },
    {
        img: Img04,
        info: '공용 컴포트핏 라이프스타일',
        name: '<COOL WAVE> 그래픽 프린트 냉감 티셔츠',
        price: '49,000원',
    },
    {
        img: Img05,
        info: '공용 컴포트핏 라이프스타일',
        name: '<COOL WAVE> 그래픽 프린트 냉감 티셔츠',
        price: '49,000원',
    }
];

const hashtags = [
    '냉감티셔츠',
    '에샤페',
    '반팔티셔츠',
    '페이토&샌들',
    '인터런',
];

const Section02 = () => {
    return (
        <div className='Section02_wrap'>
            <div className='header'>
                <h1>지금 많이 찾는 상품</h1>
                <div className='hashtag_menu'>
                    {hashtags.map((tag, index) => (
                        <span key={index} className={index === 0 ? 'active' : ''}>
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>

        <div className='main'>
            {productList.map((product, index) => (
                <div key={index} className="product_card">
                <img src={product.img} alt="" />
                <div>
                    <div className='info'>{product.info}</div>
                    <h3>{product.name}</h3>
                    <h3>{product.price}</h3>
                </div>
            </div>
        ))}
        </div>
    </div>
    );
};

export default Section02
