import React from 'react'
import '../../generalStyle.css'
import './style.css'

function Sponsors() {

    const prefix = "/images/sponsorImg/";

    const sponsorListOne = [
        {
            sponsorImg: prefix + "bosch.png",
            sponsorAlt: "bosch"
        },
        {
            sponsorImg: prefix + "monarkDiesel.png",
            sponsorAlt: "monarkDiesel"
        },
        {
            sponsorImg: prefix + "delphi.png",
            sponsorAlt: "delphi"
        },
        {
            sponsorImg: prefix + "spacoDiesel.png",
            sponsorAlt: "spacoDiesel"
        },
        {
            sponsorImg: prefix + "BCD.jpeg",
            sponsorAlt: "BCD"
        },
    ];

    const sponsorListTwo = [
        {
            sponsorImg: prefix + "FIRAD.jpeg",
            sponsorAlt: "FIRAD"
        },
        {
            sponsorImg: prefix + "FLAG.jpeg",
            sponsorAlt: "FLAG"
        },
        {
            sponsorImg: prefix + "Stanadyne.png",
            sponsorAlt: "Stanadyne"
        },
        {
            sponsorImg: prefix + "ZEXEL.png",
            sponsorAlt: "ZEXEL"
        },
        {
            sponsorImg: prefix + "MEFIN.png",
            sponsorAlt: "MEFIN"
        },
    ]


      return (
        <section className="sponsor">

            <ul>
                {
                    sponsorListOne.map((e) => (
                        <li key={`${e.sponsorAlt}-${e.sponsorImg}`}>
                            <img src={e.sponsorImg} alt={e.sponsorAlt} className="sponsor__img" />
                        </li>
                    ))
                }
            </ul>
            <ul className="sponsorContainer">
                {
                    sponsorListTwo.map((e) => (
                        <li key={`${e.sponsorAlt}-${e.sponsorImg}`}>
                            <img src={e.sponsorImg} alt={e.sponsorAlt} className="sponsor__img" />
                        </li>
                    ))
                }
            </ul>


        </section>
      )
  }


export default Sponsors;