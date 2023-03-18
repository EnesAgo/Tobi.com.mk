import React from 'react'
import ExperienceSection from '../../components/Experience/ExperienceSection';
import Sponsors from '../../components/Sponsors/Sponsors';
import '../../generalStyle.css'
import ContactForm from '../contact/parts/ContactForm';
import ContainerOne from './parts/ContainerOne';
import ContainerTypeA from './parts/ContainerTypeA';
import ContainerTypeB from './parts/ContainerTypeB';
import './style.css'

function Home() {

    const prefix = "/images/offerImg/";

    const offerList = [
        {
            text: "We offer everything that you need for your diesel vehicles in one place",
            imgUrl: prefix + "offerOne.jpeg",
            imgAlt: "offerOne"
        },
        {
            text: "Products of world’s most famous brands in the auto industry",
            imgUrl: prefix + "offerTwo.jpg",
            imgAlt: "offerTwo"
        },
        {
            text: "Buy top quality original products",
            imgUrl: prefix + "offerThree.jpg",
            imgAlt: "offerThree"
        },
        {
            text: "Always up to date with the latest technology",
            imgUrl: prefix + "offerFour.jpg",
            imgAlt: "offerFour"
        }
    ]

      return (
          <div className='main home'>
              
            <ContainerOne />
            <ExperienceSection />

            <ul className='offers'>
                {
                    offerList.map((element, index) => {
                        if(index%2==0){
                            return (
                                <li key={`${element.imgUrl}-${element.text}-${Math.random()*100}`}>
                                    <ContainerTypeA 
                                        text={element.text} 
                                        imgUrl={element.imgUrl} 
                                        imgAlt={element.imgAlt} 
                                    />
                                </li>
                            )
                        }
                        else{
                            return (
                                <li key={`${element.imgUrl}-${element.text}-${Math.random()*100}`}>
                                    <ContainerTypeB
                                        text={element.text} 
                                        imgUrl={element.imgUrl} 
                                        imgAlt={element.imgAlt} 
                                    />
                                </li>
                            )
                        }
                    })
                }
            </ul>

            <h1 style={{marginTop: "75px"}}>Contact US</h1>
            <ContactForm />

            <Sponsors />

          </div>
      )
  }


export default Home;