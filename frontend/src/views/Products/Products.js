
import React from 'react'
import '../../generalStyle.css'
import './style.css'

import ExperienceSection from '../../components/Experience/ExperienceSection'
import Sponsors from '../../components/Sponsors/Sponsors'
import {OneProduct, OneProductReverse} from './OneProduct'

function Products() {

    const prefix = "/images/productImg/";
    const suffix = ".jpeg";

    const products = [
        {
            img: prefix+"productOne"+suffix,
            name: "Nozzles",
            desc: "“P”, “S”, “DN” nozzles for all kinds of passenger and commercial vehicles, agricultural machines (tractors, combines, cultivators), \n construction machines (forklifts, excavators etc.), and all associated parts for them (nozzle holders)",
            brands: "Bosch, Delphi, Monark, Firad, IPM, Stanadyne, Motorpal"
        },
        {
            img: prefix+"productTwo"+suffix,
            name: "Elements and delivery valves",
            desc: "elements, delivery valves, springs, camrings, oil seals, bearings, regulators, membranes for all diesel vehicles",
            brands: "Bosch, Delphi, Monark, Firad, IPM, Stanadyne, Motorpal"
        },
        {
            img: prefix+"productThree"+suffix,
            name: "Repair kits ",
            desc: "Repair kits Gasket kits, washers, bushs, oil seals, bolts, rubbers and everything else that is needed for the repair \n of all types of DPA, DPC, DPS, VP, EPIC, Common Rail, CPR, CP3 pumps",
            brands: "Bosch, Spaco, Flag, Monark"
        },
        {
            img: prefix+"productFour"+suffix,
            name: "Hidraulic heads/ Rotors",
            desc: "Hydraulic heads for all types of rotary pumps and all associated parts for their reparation",
            brands: "Bosch, IPM, Fischer"
        },
        {
            img: prefix+"productFive"+suffix,
            name: "Feed pump/ AC pump",
            desc: "feed pumps, their reparation kits, hand pumps, hand primers for all types of vehicles",
            brands: "Bosch, BCD, Monark, IPM, Flag"
        },
        {
            img: prefix+"productSix"+suffix,
            name: "Common rail injectors",
            desc: "injectors and and their repair kits",
            brands: "Bosch, Denso, Siemens"
        },
        {
            img: prefix+"productSeven"+suffix,
            name: "High pressure pumps",
            desc: "New and second hand, inline androtary pumps for many types of vehicles (cars, trucks, tractors, combines)",
            brands: ""
        },
        {
            img: prefix+"productEight"+suffix,
            name: "Glow plugs",
            desc: "",
            brands: ""
        },
        {
            img: prefix+"productNine"+suffix,
            name: "Test benches",
            desc: "",
            brands: ""
        },
        {
            img: prefix+"productTen"+suffix,
            name: "Other",
            desc: "solenoids,sensor nozzles, high pressure pipes, non-returning  valves, cam rings, ribbed belts, filters, wipers, rotary lights, etc.",
            brands: ""
        },
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