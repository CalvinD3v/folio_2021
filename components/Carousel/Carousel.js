import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const Carousel = (props) => {
    const {images, title} = props.content[0]
    const [pause, setPause] = React.useState(false)
    const timer = React.useRef()
    const [sliderRef, slider] = useKeenSlider({
        duration: 1500,
        dragStart: () => {
            setPause(true)
        },
        dragEnd: () => {
            setPause(false)
        },

        slidesPerView: 1,
        mode: "free-snap",
        spacing: 15,
        centered: true,
        loop: true,
    })

    React.useEffect(() => {
        sliderRef.current.addEventListener("mouseover", () => {
            setPause(true)
        })
        sliderRef.current.addEventListener("mouseout", () => {
            setPause(false)
        })
    }, [sliderRef])

    React.useEffect(() => {
        timer.current = setInterval(() => {
            if (!pause && slider) {
                slider.next()
            }
        }, 2000)
        return () => {
            clearInterval(timer.current)
        }
    }, [pause, slider])

    return (
        <div ref={sliderRef} className="keen-slider" style={{background: '#f69420',padding: '7px 0', borderRadius: 45},title == 'App Slides' ? {width: 360} : {width: 1080}}>

            {images.map((src, idx) => (
                <div key={idx} className={`keen-slider__slide number-slide${idx}`}>
                    <img src={`http://localhost:1337${src.formats.medium.url}`} />
                </div>
            ))}
            
        </div>
    )
}
export default Carousel