import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const Slides = (props) => {
    const { images, title } = props.content[2]
    const [pause, setPause] = React.useState(false)
    const timer = React.useRef()
    const [sliderRef, slider] = useKeenSlider({
        duration: 1500,
        slidesPerView: 2,
        mode: "free-snap",
        spacing: 0,
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
        }, 3000)
        return () => {
            clearInterval(timer.current)
        }
    }, [pause, slider])

    return (
        <div ref={sliderRef} className="keen-slider customeSlider">
            {images &&
                images.map((src, idx) => (
                    <div key={idx} className={`keen-slider__slide number-slide${idx}`}>
                        {/* <img src={`http://localhost:1337${src.formats.medium.url}`} /> */}
                        <img
                            src={src.url.includes("upload")
                                ? `http://localhost:1337${src.url}`
                                : src.url
                            }
                        />
                    </div>
                ))}
        </div>
    )
}
export default Slides