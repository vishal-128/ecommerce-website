import React from 'react'
import { Spinner } from 'react-bootstrap'

function Loader() {
  return (
    <Spinner
      animation = 'border'
      role ='status'
      style = {{
         height: '100px',
         width: '100px',
         margin: 'auto',
         display: 'black'
      }
      }>
      <spam className='sr-only'>Loading...</spam>
    </Spinner>
  )
}

export default Loader
