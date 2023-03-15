import React from 'react'
import { Link } from 'react-router-dom'
import '../../../generalStyle.css'
import '../style.css'

function ContainerOne() {

    const imgUrl = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.3I6xQC0yOqpu7SHRVxTFEgHaFj%26pid%3DApi&f=1&ipt=161097ec6abe4c34517a3bc9db88a76a11a5197febcb454ff059637d32c8d4b9&ipo=images"

      return (
          <section className="homeContainer homeContainerTwo" id="homeContainerTwoId">
               <ul>
                <li>
                    <h1>Welcome to Your health Center</h1>
                    <p className="lorem"> 
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Et enim minima, doloremque, quod cum libero quasi debitis
                        quo necessitatibus tempora, distinctio facilis possimus dolores 
                        sapiente non totam corporis illo nostrum?
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Quod, odio animi? At assumenda est natus amet impedit aliquam
                        beatae accusantium ipsam repellat laboriosam. Blanditiis, 
                        fugiat eum? Sint consequatur temporibus repudiandae?
                    </p>
                    <Link to="/about">
                    <div className="mediumYellowButton">
                        <p>let's consult</p>
                    </div>
                    </Link>
                </li>
                <li>
                    <img src={imgUrl} alt="mechanic" />
                </li>
            </ul>
          </section>
      )
  }


export default ContainerOne;