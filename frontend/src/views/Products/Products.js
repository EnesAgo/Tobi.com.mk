
import React from 'react'
import ExperienceSection from '../../components/Experience/ExperienceSection'
import '../../generalStyle.css'
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
          </div>
      )
  }

function OneProduct({img, name, desc, brands}) {

    return (
        <div className='Product'>
            <img className='productIMG' src={img} alt={name} />
            
            <div className='ProductText'>

                <h3>{name}</h3>

                <p className='textP'>
                    <NewLineText text={desc} />
                    <span className='textPBrands'>{brands}</span>
                </p>

            </div>
        </div>
    )
    
}

function NewLineText(text) {

    return (text.text.toString().split("\n").map((value, index) => {
        console.log(value)
        return (
          <p key={index}>
            {value}
            <br />
          </p>
        )
      })
    )
}

export default Products;