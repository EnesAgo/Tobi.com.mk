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

function OneProductReverse({img, name, desc, brands}) {

    return (
        <div className='Product'>            
            <div className='ProductText'>

                <h3>{name}</h3>

                <p className='textP'>
                    <NewLineText text={desc} />
                    <span className='textPBrands'>{brands}</span>
                </p>
            </div>

            <img className='productIMG' src={img} alt={name} />

        </div>
    )
    
}

function NewLineText(text) {

    return (text.text.toString().split("\n").map((value, index) => {
        return (
          <span key={index}>
            {value}
            <br />
          </span>
        )
      })
    )
}


export {OneProduct, OneProductReverse}