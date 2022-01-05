import React from 'react'
import './AboutUs.css'
import Layout from '../../components/Layout/Layout'

export default function AboutUs(props) {


  return (
    <Layout user={props.user}>

      <div>
        <h1> Check Us Out!</h1>
        <div className='teamMember'>
          <h2 className='name'>
            Dele A.
          </h2>
          <a href='https://www.linkedin.com/in/dele-akinfenwa-9131b79b/'><img className='imgLink' alt='LinkedIn' src='https://www.pngall.com/wp-content/uploads/2016/07/Linkedin-Download-PNG.png' /></a>
          <a href='https://github.com/DeleAkinfenwa'><img className='imgLink' alt='Github' src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' /></a>
        </div>

        <div className='teamMember'>
          <h2 className='name'>
            Kiaya A.
          </h2>
          <a href='https://www.linkedin.com/in/kiayaanderson/'><img className='imgLink' alt='LinkedIn' src='https://www.pngall.com/wp-content/uploads/2016/07/Linkedin-Download-PNG.png' /></a>
          <a href='https://github.com/kiayaand20'><img className='imgLink' alt='Github' src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' /></a>

        </div>

        <div className='teamMember'>
          <h2 className='name'>
            Nitesh M.
          </h2>
          <a href='https://www.linkedin.com/in/niteshmisra5141995/'><img className='imgLink' alt='LinkedIn' src='https://www.pngall.com/wp-content/uploads/2016/07/Linkedin-Download-PNG.png' /></a>
          <a href='https://github.com/niteshmisraGA'><img className='imgLink' alt='Github' src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' /></a>

        </div>

        <div className='teamMember'>
          <h2 className='name'>
            Oscar R.
          </h2>
          <a href='https://www.linkedin.com/in/oscar-rios-6a0423194'><img className='imgLink' alt='LinkedIn' src='https://www.pngall.com/wp-content/uploads/2016/07/Linkedin-Download-PNG.png' /></a>
          <a href='https://github.com/oscarrios26'><img className='imgLink' alt='Github' src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' /></a>

        </div>
      </div>
    </Layout>
  )
}
