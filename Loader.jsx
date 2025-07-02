import React from 'react'
import {GridLoader} from 'react-spinners'

function Loader() {
  return (
    <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        }}>
      <GridLoader color="#d49644" size={25} speedMultiplier={0.5} />
    </div>
  )
}

export default Loader
