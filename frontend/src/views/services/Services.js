import React from 'react'
import Sponsors from '../../components/Sponsors/Sponsors';
import '../../generalStyle.css'
import ContainerTypeA from '../Home/parts/ContainerTypeA';
import ContainerTypeB from '../Home/parts/ContainerTypeB';
import ServiceTypeA from './parts/ServiceTypeA';
import ServiceTypeB from './parts/ServiceTypeB';
import './style.css'

function Services() {

    const prefix = "/images/offerImg/";

    const serviceData = [
        {
            text: "You can trust us the caring for your Diesel vehicle. Besides the core business of supplying spare parts, further our company in cooperation with a number of services throughout the Republic of Macedonia provides mounting of the spare parts. Also we perform complete diagnostics, servicing and maintenance of your fleet.",
            imgUrl: prefix + "serviceOne.jpeg",
            imgAlt: "sericeOne"
        },
        {
            text: "As an additional activity we offer a complete solution to equip diesel services. Our company is authorized to sell all kinds of devices for diagnostics and repair of pumps (Bosch KTS, Bosch EPS, KMA, MGS) and also licensed software (Bosch ESI Tronic).",
            imgUrl: prefix + "serviceTwo.jpeg",
            imgAlt: "sericeTwo"
        }
    ]

      return (
          <div className='services'>

                <div className="serviceContainer">
                    <ServiceTypeA
                        text={serviceData[0].text} 
                        imgUrl={serviceData[0].imgUrl} 
                        imgAlt={serviceData[0].imgAlt} 
                    />
                    <ServiceTypeB
                        text={serviceData[1].text} 
                        imgUrl={serviceData[1].imgUrl} 
                        imgAlt={serviceData[1].imgAlt} 
                    />
                </div>
              
              <Sponsors />
          </div>
      )
  }


export default Services;