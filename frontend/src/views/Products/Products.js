
import React from 'react'
import '../../generalStyle.css'
import './style.css'

import ExperienceSection from '../../components/Experience/ExperienceSection'
import Sponsors from '../../components/Sponsors/Sponsors'
import {OneProduct, OneProductReverse} from './OneProduct'

function Products() {

    const prefix=""

    const products = [
        {
            img: prefix+"http://tobi.com.mk/en/images/1-2-3.jpg",
            name: "Some Name",
            desc: "new line or dasdsd asd asd as ddsa da ads ad s new line",
            brands: "ikea, bosch, some, car, brands"
        },
        {
            img: prefix+"http://tobi.com.mk/en/images/1-2-3.jpg",
            name: "Some Name",
            desc: "new line or dasdsd asd asd as ddsa da ads ad s new line",
            brands: "ikea, bosch, some, car, brands"
        },
        {
            img: prefix+"http://tobi.com.mk/en/images/1-2-3.jpg",
            name: "Some Name",
            desc: "new line or dasdsd asd asd as ddsa da ads ad s new line",
            brands: "ikea, bosch, some, car, brands"
        },
        {
            img: prefix+"http://tobi.com.mk/en/images/1-2-3.jpg",
            name: "Some Name",
            desc: "new line or dasdsd asd asd as ddsa da ads ad s new line",
            brands: "ikea, bosch, some, car, brands"
        }
    ]

      return (
          <div className='main productMain'>

            <ExperienceSection />

            <div className="AllProducts">

                {
                    products.map((element, index) => {
                        if(index%2==0){
                            return(
                                <OneProduct 
                                    key={`${element.img}-${element.name}-${Math.random()*100}`}
                                    img={element.img}
                                    name={element.name}
                                    desc={element.desc}
                                    brands={element.brands}
                                />
                            )
                        }
                        else{
                            return (
                                <OneProductReverse
                                    key={`${element.img}-${element.name}-${Math.random()*100}`}
                                    img={element.img}
                                    name={element.name}
                                    desc={element.desc}
                                    brands={element.brands}
                                />
                            )
                        }
                    })
                }
            </div>

            <Sponsors />

          </div>
      )
  }


export default Products;