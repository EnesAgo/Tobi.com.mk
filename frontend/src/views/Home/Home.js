import React from 'react'
import ExperienceSection from '../../components/Experience/ExperienceSection';
import Sponsors from '../../components/Sponsors/Sponsors';
import '../../generalStyle.css'
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
                    offerList.map((e, i) => {
                        if(i%2==0){
                            return (
                                <li>
                                    <ContainerTypeA 
                                        text={e.text} 
                                        imgUrl={e.imgUrl} 
                                        imgAlt={e.imgAlt} 
                                    />
                                </li>
                            )
                        }
                        else{
                            return (
                                <li>
                                    <ContainerTypeB
                                        text={e.text} 
                                        imgUrl={e.imgUrl} 
                                        imgAlt={e.imgAlt} 
                                    />
                                </li>
                            )
                        }
                    })
                }
            </ul>

            <Sponsors />

          </div>
      )
  }


export default Home;