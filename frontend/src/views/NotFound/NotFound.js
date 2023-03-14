import React, { Suspense } from 'react'
import '../../generalStyle.css'
import './style.css'

function NotFound() {
      return (
          <div className='notFound'>
            <Suspense fallback={<h1>Error 404</h1>}>
                <img className='notFoundImg' src='/images/404Error.gif' />
            </Suspense>
          </div>
      )
  }


export default NotFound;