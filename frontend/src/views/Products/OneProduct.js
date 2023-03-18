import React from "react"
import '../../generalStyle.css'
import './style.css'

function OneProduct({img, name, desc, brands}) {

    const DisplayProducts = brands.length>1 ? true : false

    return (
        <div className='Product'>
            <img className='productIMG' src={img} alt={name} />
            
            <div className='ProductText'>

                <h3>{name}</h3>

                <p className='textP'>
                    <NewLineText text={desc} />
                    {
                        DisplayProducts && <span className='textPBrands'>By brands: {brands}</span>
                    }
                    
                </p>

            </div>
        </div>
    )
    
}

function OneProductReverse({img, name, desc, brands}) {

    const DisplayProducts = brands.length>1 ? true : false

    return (
        <div className='Product'>            
            <div className='ProductText'>

                <h3>{name}</h3>

                <p className='textP'>
                    <NewLineText text={desc} />

                    {
                        DisplayProducts && <span className='textPBrands'>By brands: {brands}</span>
                    }
                    
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