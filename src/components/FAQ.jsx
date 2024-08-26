import React from 'react'
import './Reasons.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';



const FAQ = () => {
    return (
        <div className="Row row">
            <div className="col-md-1"></div>
            <div className="col-md-10 p-2 mt-4">
                <h3 className=' p-3 text-light'>Frequently Asked Questions</h3>
                <div>
                    <Accordion style={{ backgroundColor: 'rgb(45,45,45)', color: 'white', width: '75%', fontSize: '25px' }} className='p-2 mb-2 ms-sm-3'>
                        <AccordionSummary
                            expandIcon={  <svg style={{color:'white'
                            }} xmlns="http://www.w3.org/2000/svg" fill="none" width="36" height="36" viewBox="0 0 36 36" role="img" data-icon="PlusLarge" aria-hidden="true" class="elj7tfr3 default-ltr-cache-1dpnjn e164gv2o4"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"></path></svg>}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            What is Netflix?
                        </AccordionSummary>
                        <AccordionDetails>
                            Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. <br /> <br />

                            You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                        </AccordionDetails>
                    </Accordion>

                    <Accordion style={{ backgroundColor: 'rgb(45,45,45)', color: 'white', width: '75%', fontSize: '25px' }} className='p-2 mb-2 ms-sm-3'>
                        <AccordionSummary
                            expandIcon={  <svg style={{color:'white'
                            }} xmlns="http://www.w3.org/2000/svg" fill="none" width="36" height="36" viewBox="0 0 36 36" role="img" data-icon="PlusLarge" aria-hidden="true" class="elj7tfr3 default-ltr-cache-1dpnjn e164gv2o4"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"></path></svg>}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            How much does Netflix cost?
                        </AccordionSummary>
                        <AccordionDetails>
                            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.
                        </AccordionDetails>
                    </Accordion>

                    <Accordion style={{ backgroundColor: 'rgb(45,45,45)', color: 'white', width: '75%', fontSize: '25px' }} className='p-2 mb-2 ms-sm-3'>
                        <AccordionSummary
                            expandIcon={  <svg style={{color:'white'
                            }} xmlns="http://www.w3.org/2000/svg" fill="none" width="36" height="36" viewBox="0 0 36 36" role="img" data-icon="PlusLarge" aria-hidden="true" class="elj7tfr3 default-ltr-cache-1dpnjn e164gv2o4"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"></path></svg>}
                            aria-controls="panel3-content"
                            id="panel3-header"
                        >
                            Where can I watch?
                        </AccordionSummary>
                        <AccordionDetails>
                            Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

                            You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                        </AccordionDetails>
                    </Accordion>

                    <Accordion style={{ backgroundColor: 'rgb(45,45,45)', color: 'white', width: '75%', fontSize: '25px' }} className='p-2 mb-2 ms-sm-3'>
                        <AccordionSummary
                            expandIcon={  <svg style={{color:'white'
                            }} xmlns="http://www.w3.org/2000/svg" fill="none" width="36" height="36" viewBox="0 0 36 36" role="img" data-icon="PlusLarge" aria-hidden="true" class="elj7tfr3 default-ltr-cache-1dpnjn e164gv2o4"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"></path></svg>}
                            aria-controls="panel3-content"
                            id="panel3-header"
                        >
                            How do I cancel?
                          
                        </AccordionSummary>
                        <AccordionDetails>
                        Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                        </AccordionDetails>
                    </Accordion>

                    <Accordion style={{ backgroundColor: 'rgb(45,45,45)', color: 'white', width: '75%', fontSize: '25px' }} className='p-2 mb-2 ms-sm-3'>
                        <AccordionSummary
                            expandIcon={  <svg style={{color:'white'
                            }} xmlns="http://www.w3.org/2000/svg" fill="none" width="36" height="36" viewBox="0 0 36 36" role="img" data-icon="PlusLarge" aria-hidden="true" class="elj7tfr3 default-ltr-cache-1dpnjn e164gv2o4"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"></path></svg>}
                            aria-controls="panel3-content"
                            id="panel3-header"
                        >
                            What can I watch on Netflix?
                        </AccordionSummary>
                        <AccordionDetails>
                            Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                        </AccordionDetails>
                    </Accordion>

                    <Accordion style={{ backgroundColor: 'rgb(45,45,45)', color: 'white', width: '75%', fontSize: '25px' }} className='p-2 mb-2 ms-sm-3'>
                        <AccordionSummary
                            expandIcon={  <svg style={{color:'white'
                            }} xmlns="http://www.w3.org/2000/svg" fill="none" width="36" height="36" viewBox="0 0 36 36" role="img" data-icon="PlusLarge" aria-hidden="true" class="elj7tfr3 default-ltr-cache-1dpnjn e164gv2o4"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"></path></svg>}
                            aria-controls="panel3-content"
                            id="panel3-header"
                        >
                            Is Netflix good for kids?
                        </AccordionSummary>
                        <AccordionDetails>
                            Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                        </AccordionDetails>
                    </Accordion>
                </div>


            </div>
            <div className="col-md-1"></div>
        </div>

    )
}

export default FAQ
