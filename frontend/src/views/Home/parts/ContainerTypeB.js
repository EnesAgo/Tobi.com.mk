import React from 'react'
import { Link } from 'react-router-dom'
import '../../../generalStyle.css'
import '../style.css'

function ContainerTypeB({text, imgUrl, imgAlt}) {

    // const imgUrl = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.3I6xQC0yOqpu7SHRVxTFEgHaFj%26pid%3DApi&f=1&ipt=161097ec6abe4c34517a3bc9db88a76a11a5197febcb454ff059637d32c8d4b9&ipo=images"

      return (
          <section className="homeContainer homeContainerTwo homeContainerListGray">
            <ul className='homeContainerListGray'>
               <li>
                    <img src={imgUrl} alt={imgAlt} />
                </li>
                <li>
                    <p className="lorem listText"> 
                        {text}
                    </p>
                </li>
            </ul>
          </section>
      )
  }


export default ContainerTypeB;