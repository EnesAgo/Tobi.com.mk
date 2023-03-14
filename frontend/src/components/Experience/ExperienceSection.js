import React from 'react'
import './style.css'
import '../../generalStyle.css'

function ExperienceSection() {
      return (
          <section className='experience'>
            <h2 className="section__title">Experience</h2>

            <div className="experience__container container grid">
                <div className="experience__content grid">
                    <div className="experience__data">
                        <h2 className="experience__number">20+</h2>
                        <span className="experience__description">Year Experience</span>
                    </div>

                    <div className="experience__data">
                        <h2 className="experience__number">75</h2>
                        <span className="experience__description">Brands</span>
                    </div>

                    <div className="experience__data">
                        <h2 className="experience__number">100k+</h2>
                        <span className="experience__description">Happy Clients</span>
                    </div>
                </div>
            </div>
          </section>
      )
  }


export default ExperienceSection;