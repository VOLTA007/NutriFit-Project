import React, { useRef, useEffect } from 'react'
import Flickity from 'flickity'
import imagesLoaded from 'imagesloaded'
import 'flickity/css/flickity.css'

const SimpleSlider = () => {
    const flickityRef = useRef(null)
    const imgsRef = useRef([])

    useEffect(() => {
        // Initialize Flickity carousel when component mounts
        const flickity = new Flickity(flickityRef.current, {
            imagesLoaded: true,
            percentPosition: false,
            autoPlay: 1500,
            pauseAutoPlayOnHover: false,
            selectedAttraction: 0.01,
            friction: 0.25,
            initialIndex: 1,
            cellAlign: 'center',
            draggable: true,
            prevNextButtons: false,
            lazyLoad: true,
            setGallerySize: true,
        })

        // Ensure images are loaded before initializing Flickity
        imagesLoaded(flickityRef.current).on('progress', () => {
            flickity.resize() // Resize Flickity after images are loaded
        })

        // Store Flickity instance and image elements in refs
        flickityRef.current.flickityInstance = flickity
        flickityRef.current.imgElements = imgsRef.current

        // Add scroll event listener for parallax effect
        flickity.on('scroll', handleParallaxEffect)

        // Clean up Flickity instance when component unmounts
        return () => {
            flickity.destroy() // Destroy Flickity instance to avoid memory leaks
        }
    }, []) // Run this effect only once on component mount

    // Function to handle parallax effect
    const handleParallaxEffect = () => {
        const flickityInstance = flickityRef.current.flickityInstance
        const imgElements = flickityRef.current.imgElements

        flickityInstance.slides.forEach((slide, i) => {
            const img = imgElements[i]
            const x = ((slide.target + flickityInstance.x) * -1) / 3
            img.style.transform = `translateX(${x}px)`
        })
    }

    return (
        <div className="carousel" ref={flickityRef}>
            <div className="carousel-cell">
                <img
                    className="img"
                    ref={(el) => imgsRef.current.push(el)}
                    src="/Gym1.jpg"
                    data-flickity-lazyload="/Gym1.jpg" // Specify lazy-loaded image source
                    alt="Slide 1"
                />
            </div>
            <div className="carousel-cell">
                <img
                    className="img"
                    ref={(el) => imgsRef.current.push(el)}
                    src="/Gym2.jpg"
                    data-flickity-lazyload="/Gym2.jpg" // Specify lazy-loaded image source
                    alt="Slide 2"
                />
            </div>
            <div className="carousel-cell">
                <img
                    className="img"
                    ref={(el) => imgsRef.current.push(el)}
                    src="/Gym3.jpg"
                    data-flickity-lazyload="/Gym3.jpg" // Specify lazy-loaded image source
                    alt="Slide 3"
                />
            </div>
        </div>
    )
}

export default SimpleSlider
