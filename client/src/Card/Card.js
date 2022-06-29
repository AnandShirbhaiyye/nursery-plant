import React from 'react';
import './Card.css';
import img1 from './img/image1.jpg';
import img2 from './img/image2.jpg';
import img3 from './img/image3.jpg';

export default function Card() {
  return (
    <>
    <div className="index-post">
        <div className="contener">
            <div className="image-contener">
                <img src={img1} alt=""/>
            </div>
            <div className="meta-contener">
                <h2 className="title">Nature World.</h2>
                <span className="desc">Nature World News brings out the science geek in every reader, fostering an improved appreciation of our environment...</span>
            </div>
            <div className="button-contener mt-5 mb-3">
                <a href="#" className="button">Read More →</a>
            </div>
        </div>
        <div className="contener">
            <div className="image-contener">
                <img src={img2} alt=""/>
            </div>
            <div className="meta-contener">
                <h2 className="title">Plant pictures..</h2>
                <span className="desc">Plants are predominantly photosynthetic eukaryotes of the kingdom Plantae. Historically. the plant kingdom...</span>
            </div>
            <div className="button-contener mt-5 mb-3">
                <a href="#" className="button">Read More →</a>
            </div>
        </div>
        <div className="contener">
            <div className="image-contener">
                <img src={img3} alt=""/>
            </div>
            <div className="meta-contener">
                <h2 className="title">Green Peas.</h2>
                <span className="desc">The pea is most commonly the small spherical seed or the seed-pod of the pod fruit Pisum sativum...</span>
            </div>
            <div className="button-contener mt-5 mb-3">
                <a href="#" className="button">Read More →</a>
            </div>
        </div>
        <div className="contener">
            <div className="image-contener">
                <img src={img1} alt=""/>
            </div>
            <div className="meta-contener">
                <h2 className="title">Nature World.</h2>
                <span className="desc">Nature World News brings out the science geek in every reader, fostering an improved appreciation of our environment...</span>
            </div>
            <div className="button-contener mt-5 mb-3">
                <a href="#" className="button">Read More →</a>
            </div>
        </div>
    </div>
    </>
  )
}
