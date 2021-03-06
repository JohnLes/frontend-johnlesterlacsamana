import React from 'react';
import './Section1.css';
import picture3 from '../../images/picture3.png';

const Section1 = () => {
    return(
        <div className='section1'>
            <div className='who_are_we'>
                <section className='section1_title'>
                    <h1>Who are we?</h1>
                </section>
                <section className='section1_content'>
                    <p>
                        According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record low maximum sea ice extent tihs year down to low ice extent in the Pacific and a late drop in ice extent in the Barents Sea.
                    </p>
                </section>
            </div>
            <div className='picture_container1' />
            <div className='picture_container2' />
            <div className='quote'>
                <p>"Over the span of the satellite record, Arctic sea ice has been declining significantly, while sea ice in the Antarctichas increased very slightly"</p>
                <p>-NOAA</p>
            </div>
            <div className='picture_container3'>
                <img src={picture3} alt='work related' />
            </div>
            <div className='article'>
                <p id='article_title'>So what does the new record for the lowest level of winter ice actually mean</p>
                <p>
                    The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens with climate change. Even if the Arctic continues to be one of the fastest-warming regions of the world, it will always be plunged into bitterly cold polar dark every winter. And year-by-year, for all kinds of natural reasons, there’s huge variety of the state of the ice.
                </p>
                <p>
                    For a start, it does not automatically follow that a record amount of ice will melt this summer. More important for determining the size of the annual thaw is the state of the weather as the midnight sun approaches and temperatures rise. But over the more than 30 years of satellite records, scientists have observed a clear pattern of decline, decade-by-decade.
                </p>
                <p>
                    The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens with climate change. Even if the Arctic continues to be one of the fastest-warming regions of the world, it will always be plunged into bitterly cold polar dark every winter. And year-by-year, for all kinds of natural reasons, there’s huge variety of the state of the ice.
                </p>
            </div>

        </div>
    )
}

export default Section1;
