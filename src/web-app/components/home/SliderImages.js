import React from 'react'
import Image from 'next/image'
import { Carousel } from 'react-bootstrap';
import Helpers from '../../../Helpers';
import styles from './home.module.scss';
const SliderImages = () => {

    return(
        <Carousel indicators={false} variant="dark">
        <Carousel.Item className={styles.slider_wrap}>
            <Image
                src={Helpers.Images.Slider1}
                alt="Picture of the author"
                className="d-block w-100"
                layout="fill"
            />

            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.slider_wrap}>
            <Image
                src={Helpers.Images.Slider2}
                alt="Picture of the author"
                layout="fill"
                className="d-block w-100"
            />

            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.slider_wrap}>
            <Image
                src={Helpers.Images.Slider3}
                alt="Picture of the author"
                layout="fill"
                className="d-block w-100"
                
            />

            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    )
}

export default SliderImages
