import React from 'react'
import Img01 from '../../assets/img/Section03_1.png'
import Img02 from '../../assets/img/Section03_2.png'

const Section03 = () => {
    return (
        <div className="Section03_wrap">
            <h1 className="section_title">기획전</h1>

            <div className="main">
                <div>  
                    <img className='img' src={Img01} alt="" />
                    <h3>FILA CUSTOM STUDIO</h3>
                    <button>자세히 보기</button>
                </div>

                <div>
                    <img className='img' src={Img02} alt="" />
                    <h3>Pertex Life</h3>
                    <button>자세히 보기</button>
                </div>
            </div>
        </div>
    );
};

export default Section03