import React from "react"
import '../../generalStyle.css'
import './style.css'

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

export default OneProduct;
