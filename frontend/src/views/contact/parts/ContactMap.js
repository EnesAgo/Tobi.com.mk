import React from 'react'
import useWindowSizeOnce from '../../../hooks/useWindowSizeOnce';
import '../style.css'


function ContactMap() {

    const {width, height} = useWindowSizeOnce();
    console.log(width)

    const url = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11863.363967758769!2d21.4366651!3d41.9822236!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135415242b1c3aff%3A0xc3ddd0da7d660f19!2sTOBI%20DOOEL!5e0!3m2!1str!2smk!4v1678736881487!5m2!1str!2smk"

      return (
          <div className='contactContainer map'>
            {/* https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11863.363967758769!2d21.4366651!3d41.9822236!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135415242b1c3aff%3A0xc3ddd0da7d660f19!2sTOBI%20DOOEL!5e0!3m2!1str!2smk!4v1678736881487!5m2!1str!2smk */}
            <iframe src={url} width={`${width}`} height="400" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
      )
  }


export default ContactMap;