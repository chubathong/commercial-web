import React from 'react'
import AliceCarousel from 'react-alice-carousel'

const HomeSectionCarosel = () => {
    return (
        <div>
            <AliceCarousel
                items={items}
                disableButtonsControls
                autoPlay
                autoPlayInterval={1000}
                infinite
            />
        </div>
    )
}

export default HomeSectionCarosel
