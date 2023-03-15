import React from 'react'
import '../../generalStyle.css'

function Wallpaper() {

    const styles = {
        width: "100%",
        gridArea: "wallpaper",
        borderTop: "1px solid rgba(0,0,0,0.3)",
    }

      return (
          <>
              <img style={styles} src="/images/Logo.jpg" alt="wallpaper" />
          </>
      )
  }


export default Wallpaper;