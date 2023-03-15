
import React from 'react'
import ExperienceSection from '../../components/Experience/ExperienceSection'
import Sponsors from '../../components/Sponsors/Sponsors'
import '../../generalStyle.css'
import OneProduct from './OneProduct'
import './style.css'

function Products() {



      return (
          <div className='main productMain'>

            <ExperienceSection />

            <div className="AllProducts">
                <OneProduct 
                    img={'/images/Logo.jpg'}
                    name={'Some Name'}
                    desc={'new line or dasdsd asd asd as ddsa da ads ad s new line'}
                    brands={'ikea, bosch, some, car, brands'}
                />
                <OneProduct 
                    img={'/images/Logo.jpg'}
                    name={'Some Name'}
                    desc={'new line or dasdsd asd asd as ddsa da ads ad s new line'}
                    brands={'ikea, bosch, some, car, brands'}
                />
                <OneProduct 
                    img={'/images/Logo.jpg'}
                    name={'Some Name'}
                    desc={'new line or dasdsd asd asd as ddsa da ads ad s new line'}
                    brands={'ikea, bosch, some, car, brands'}
                />
            </div>

            <Sponsors />

          </div>
      )
  }


export default Products;