import React from 'react'
import './AboutUs.css'

export default function AboutUs() {


  return (
    <div>
      <h1> Check Us Out!</h1>
      <div className='teamMember'>
        <h2 className='name'>
          Dele A.
        </h2>
        <a href='https://www.linkedin.com/in/dele-akinfenwa-9131b79b/'>linkedin image</a>
        <a href='https://github.com/DeleAkinfenwa'>github image</a>
      </div>

      <div className='teamMember'>
        <h2 className='name'>
          Kiaya A.
        </h2>
        <a href='https://www.linkedin.com'>linkedin image</a>
        <a href='https://github.com'>github image</a>
      </div>

      <div className='teamMember'>
        <h2 className='name'>
          Nitesh M.
        </h2>
        <a href='https://www.linkedin.com'>linkedin image</a>
        <a href='https://github.com'>github image</a>
      </div>

      <div className='teamMember'>
        <h2 className='name'>
          Oscar R.
        </h2>
        <a href='https://www.linkedin.com'>linkedin image</a>
        <a href='https://github.com'>github image</a>
      </div>
    </div>
  )
}
