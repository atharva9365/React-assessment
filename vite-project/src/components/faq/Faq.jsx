import React, { useState } from 'react';
import "./faq.css";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Faq = () => {

  return (
    <>
      <div className='faq-heading'>
        <h1>Frequently Asked Questions</h1>
        <p>Pinpoint your audience with precision, ensuring your marketing efforts reach those <br /> most 
            likely to engage with your brand.</p>
      </div>

      <div className='faq-accordian'>
      <Accordion className='accordian-section' >
        <AccordionSummary 
          expandIcon={<KeyboardArrowDownIcon  />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className='typo-heading'>3.How does Osumare measure campaign success?</Typography>
        </AccordionSummary>
        <AccordionDetails >
          <Typography className='typo-accordian'>
          We believe in measurable results. Our data-driven approach means that every campaign's performance is 
          tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, 
          giving you clear insights into how our strategies are driving growth for your brand.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon  />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className='typo-heading'>3.How does Osumare measure campaign success?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='typo-accordian'>
          We believe in measurable results. Our data-driven approach means that every campaign's performance is 
          tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, 
          giving you clear insights into how our strategies are driving growth for your brand.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary 
          expandIcon={<KeyboardArrowDownIcon  />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className='typo-heading'>3.How does Osumare measure campaign success?</Typography>
        </AccordionSummary>
        <AccordionDetails >
          <Typography className='typo-accordian'>
          We believe in measurable results. Our data-driven approach means that every campaign's performance is 
          tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, 
          giving you clear insights into how our strategies are driving growth for your brand.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
    
    </>
  )
}

export default Faq