import React from 'react'
import ImageSedan from '../assets/images/icon-sedans.svg'
import ImageLuxury from '../assets/images/icon-luxury.svg'
import ImageSuvs from '../assets/images/icon-suvs.svg'

const PreviewCardComponent = () => {

    const cardDetails = [{
        name: 'Sedans',
        description: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
        mainColor: 'bright-orange',
        topIcon: ImageSedan,
        learnMoreLink: '/'
    }, {
        name: 'SUVs',
        description: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
        mainColor: 'dark-cyan',
        topIcon: ImageSuvs,
        learnMoreLink: '/'
    }, {
        name: 'Luxury',
        description: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
        mainColor: 'very-dark-cyan',
        topIcon: ImageLuxury,
        learnMoreLink: '/'
    }]

    return (
        <div className='grid lg:grid-cols-3 max-w-[80%] lg:max-w-4xl rounded-lg border border-very-light-gray overflow-hidden my-20 lg:my-0'>
            {cardDetails.map((card, index)=>(
                <PreviewCard key={index} name={card.name} description={card.description} topIcon={card.topIcon} learnMoreLink={card.learnMoreLink} mainColor={card.mainColor} />
            ))}
        </div>
    )
}

const PreviewCard = ({name,description,mainColor,topIcon,learnMoreLink}) => {
    return (
        <div className={`bg-${mainColor} p-10 lg:p-14 flex flex-col`}>
            <img className='w-14' src={topIcon} alt={name} />
            <h1 className='font-heading font-bold my-6 uppercase text-4xl text-very-light-gray'>{name}</h1>
            <p className='font-text text-[15px] leading-6 text-transparent-white tracking-tight pb-8 lg:pb-20 flex-1'>{description}</p>
            <a href={learnMoreLink} className={`font-text text-[15px] border-2 border-very-light-gray rounded-full w-fit px-6 py-2.5 text-${mainColor} bg-very-light-gray hover:text-very-light-gray hover:bg-transparent transition-all duration-200`}>Learn More</a>
        </div>
    )
}

export default PreviewCardComponent