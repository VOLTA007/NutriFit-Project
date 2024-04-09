import React, { useRef, useEffect } from 'react'
import Flickity from 'flickity'
import imagesLoaded from 'imagesloaded'
import 'flickity/css/flickity.css'
import { Image } from '@nextui-org/react'

const SimpleSlider = () => {
    const flickityRef = useRef(null)
    const imgsRef = useRef([])

    useEffect(() => {
        let flickityInstance = null

        const initializeFlickity = () => {
            flickityInstance = new Flickity(flickityRef.current, {
                imagesLoaded: true,
                percentPosition: false,
                autoPlay: 2000,
                pauseAutoPlayOnHover: false,
                selectedAttraction: 0.01,
                friction: 0.25,
                initialIndex: 1,
                cellAlign: 'center',
                draggable: true,
                prevNextButtons: false,
                setGallerySize: true,
            })

            flickityRef.current.flickityInstance = flickityInstance

            flickityInstance.on('scroll', handleParallaxEffect)
        }

        const handleParallaxEffect = () => {
            const slides = flickityInstance.slides
            slides.forEach((slide, index) => {
                const imgElement = imgsRef.current[index]
                const x = (slide.target + flickityInstance.x) * -1 * 0.3 // Adjust the parallax effect factor here (0.3 in this example)
                imgElement.style.transform = `translateX(${x}px)`
            })
        }

        initializeFlickity()

        // Cleanup function
        return () => {
            if (flickityInstance) {
                flickityInstance.destroy()
            }
        }
    }, [])

    return (
        <div className="carousel" ref={flickityRef}>
            <div className="carousel-cell">
                <Image
                    className="img"
                    ref={(el) => (imgsRef.current[0] = el)}
                    width={300}
                    height={200}
                    src={`https://app.requestly.io/delay/2000/http://localhost:3000/gym1.jpg`}
                    alt="Gym 1"
                />
            </div>
            <div className="carousel-cell">
                <Image
                    className="img"
                    ref={(el) => (imgsRef.current[1] = el)}
                    width={300}
                    height={200}
                    src={`https://app.requestly.io/delay/2000/http://localhost:3000/gym2.jpg`}
                    alt="Gym 2"
                />
            </div>
            <div className="carousel-cell">
                <Image
                    className="img"
                    ref={(el) => (imgsRef.current[2] = el)}
                    width={300}
                    height={200}
                    src={`https://app.requestly.io/delay/2000/http://localhost:3000/gym3.jpg`}
                    alt="Gym 3"
                />
            </div>
        </div>
    )
}

export default SimpleSlider
