import React from "react";
import ReactDOM from 'react-dom';
import Card from "./Cards";
import Sdata from "./Sdata";

import './index.css';

ReactDOM.render(
  <>

  <h1 className="header_style">List of top 5 Netflix series in2020</h1>
  <Card 
     imgsrc={Sdata[0].imgsrc}
     title={Sdata[0].title}
     sname={Sdata[0].sname}
     link={Sdata[0].link}
    // link='https://www.netflix.com/in/title/80100172'
  />
 <Card 
     imgsrc={Sdata[1].imgsrc}
     title={Sdata[1].title}
     sname={Sdata[1].sname}
     link={Sdata[1].link}
  />
 <Card 
     imgsrc={Sdata[2].imgsrc}
     title={Sdata[2].title}
     sname={Sdata[2].sname}
     link={Sdata[2].link}
  />

<Card 
     imgsrc={Sdata[3].imgsrc}
     title={Sdata[3].title}
     sname={Sdata[3].sname}
     link={Sdata[3].link}
  />

<Card 
     imgsrc={Sdata[2].imgsrc}
     title={Sdata[2].title}
     sname={Sdata[2].sname}
     link={Sdata[2].link}
  />

<Card 
     imgsrc={Sdata[4].imgsrc}
     title={Sdata[4].title}
     sname={Sdata[4].sname}
     link={Sdata[4].link}
  />

<Card 
     imgsrc={Sdata[0].imgsrc}
     title={Sdata[0].title}
     sname={Sdata[0].sname}
     link={Sdata[0].link}
  />

<Card 
     imgsrc={Sdata[1].imgsrc}
     title={Sdata[1].title}
     sname={Sdata[1].sname}
     link={Sdata[1].link}
  />
 </>
 ,document.getElementById("root") 
);
