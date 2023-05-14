import React, { useEffect } from 'react';
import './main.css';

//import icons
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BsClipboardCheck } from 'react-icons/bs';

//Import the images 
import img from '../../Assets/img.jpg';
import img2 from '../../Assets/img2.jpg';
import img3 from '../../Assets/img3.jpg';

//Import Aos
import Aos from 'aos'
import 'aos/dist/aos.css'

//Past the array named data
const Data = [
    {
        id: 1,
        imgSrc: img,
        desTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: ' Bora Bora is a tropical paradise of white sandy beaches and turquoise lagoons. You can choose exactly how much you want to pack in – perhaps you’ll spend your mornings snorkelling with schools of colourful fish before relaxing by the pool with a drink.'
    },

    {
        id: 2,
        imgSrc: img2,
        desTitle: 'Machu Picchu',
        location: 'Peru',
        grade: 'CULTURAL RELAX',
        fees: '$600',
        description: 'Machu Picchu stands 2,430 m above sea-level, in the middle of a tropical mountain forest, in an extraordinarily beautiful setting'
    },

    {
        id: 3,
        imgSrc: img3,
        desTitle: 'Great Barrier Reef',
        location: 'Australia',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'The Great Barrier Reef is a site of remarkable variety and beauty on the north-east coast of Australia.'
    },
]

const Main = () => {

    //Create a react hook to add a scrool animation
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])


    return (
        <section className='main container section'>

            <div className='secTitle'>
                <h3 data-aos=" fade-right"className='title'>
                    Most visited destinations
                </h3>
            </div>

            <div className='secContent grid'>
                {
                    Data.map(({ id, imgSrc, desTitle, location, grade, fees, description }) => {
                        return (
                            <div key={id} data-aos="fade-up" className='singleDestination'>
                                {/* Here it woll return single id from the map array*/}

                                <div className='imageDiv'>
                                    <img src={imgSrc} alt={desTitle} />
                                </div>

                                <div className='cardInfo'>
                                    <h4 className='destTitle'>{desTitle}</h4>
                                    <span className='continent flex'>
                                        <HiOutlineLocationMarker className="icon" />
                                        <span className='name'>{location}</span>
                                    </span>

                                    <div className='fees flex'>
                                        <div className='grade'>
                                            <span>{grade}<small>+1</small></span>
                                        </div>

                                        <div className='price'>
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className='desc'>
                                        <p>{description}</p>
                                    </div>

                                    <button className='btn flex'>
                                        DETAILS <BsClipboardCheck className='icon' />
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>


        </section>
    )
}

export default Main