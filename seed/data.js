import db from '../db/connection.js'
import SockSquared from '../models/sock.js'

const insertData = async () => {
  
  await db.dropDatabase()
    
  const socks = [
    {
      name: 'Resonance',
      price: '69',
      description: 'A fun and mesmerizing design you will want to kick on for any occasion',
      imgURL: 'https://res.cloudinary.com/kacloud20/image/upload/v1640200926/project3/Sock2%20Photos/12-2_cnoasf.jpg',
      sock1: 'Fuschia with blue design',
      sock2: 'Blue with lavender design'
    },
    {
      name: 'Essence',
      price: '79',
      description: 'A fun and mesmerizing design you will want to kick on for any occasion',
      imgURL: 'https://res.cloudinary.com/kacloud20/image/upload/v1640200914/project3/Sock2%20Photos/06c_yzrsqz.jpg',
      sock1: 'White with aqua, grey, and salmon ovals',
      sock2: 'Purple with aqua, grey, and salmon ovals'
    },
    {
      name: 'Push it along',
      price: '59',
      description: 'A fun and mesmerizing design you will want to kick on for any occasion',
      imgURL: 'https://res.cloudinary.com/kacloud20/image/upload/v1640200916/project3/Sock2%20Photos/06B_j6tgf8.jpg',
      sock1: 'Aqua with purple, grey, and salmon ovals',
      sock2: 'White with purple, grey, and salmon ovals'
    },
    {
      name: 'Love yourz',
      price: '49',
      description: 'A fun and mesmerizing design you will want to kick on for any occasion',
      imgURL: 'https://res.cloudinary.com/kacloud20/image/upload/v1640200928/project3/Sock2%20Photos/08_whkpsc.jpg',
      sock1: 'White with black design',
      sock2: 'Yellow with design'
    },
    {
      name: 'Gabagool',
      price: '79',
      description: 'A fun and mesmerizing design you will want to kick on for any occasion',
      imgURL: 'https://res.cloudinary.com/kacloud20/image/upload/v1640200924/project3/Sock2%20Photos/07-1_hzjcep.jpg',
      sock1: 'White with yellow and blue graphic',
      sock2: 'White with yellow and blue graphic'
    },
    {
      name: 'Cloud of Unknowing',
      price: '59',
      description: 'A fun and mesmerizing design you will want to kick on for any occasion',
      imgURL: 'https://res.cloudinary.com/kacloud20/image/upload/v1640200908/project3/Sock2%20Photos/02_qovx4v.jpg',
      sock1: 'White with black design; light blue trim',
      sock2: 'White with light blue design; light blue trim'
    },
    {
      name: 'Eclipse',
      price: '49',
      description: 'A fun and mesmerizing design you will want to kick on for any occasion',
      imgURL: 'https://res.cloudinary.com/kacloud20/image/upload/v1640200922/project3/Sock2%20Photos/10-1_pvgpeh.jpg',
      sock1: 'White with aqua design',
      sock2: 'Blue with aqua design'
    },
    {
      name: 'Window Shopper',
      price: '59',
      description: 'A fun and mesmerizing design you will want to kick on for any occasion',
      imgURL: 'https://res.cloudinary.com/kacloud20/image/upload/v1640200906/project3/Sock2%20Photos/06b_thumb-1_rg9w48.jpg',
      sock1: 'Salmon with aqua, blue, white and black graphic',
      sock2: 'Blue with aqua, white, salmon and black graphic'
    },
    {
      name: 'Painted Black',
      price: '39',
      description: 'A fun and mesmerizing design you will want to kick on for any occasion',
      imgURL: 'https://res.cloudinary.com/kacloud20/image/upload/v1640200912/project3/Sock2%20Photos/11_jwjah0.jpg',
      sock1: 'Black with mute black design',
      sock2: 'Fuschia with black design'
    },
    {
      name: 'Icecream Paint Job',
      price: '49',
      description: 'A fun and mesmerizing design you will want to kick on for any occasion',
      imgURL: 'https://res.cloudinary.com/kacloud20/image/upload/v1640200910/project3/Sock2%20Photos/07a_rpegfu.jpg',
      sock1: 'White with blue and yellow circle design',
      sock2: 'Blue with white and yellow circle design'
    },
    {
      name: 'Manchild',
      price: '99',
      description: 'A fun and mesmerizing design you will want to kick on for any occasion',
      imgURL: 'https://res.cloudinary.com/kacloud20/image/upload/v1640200920/project3/Sock2%20Photos/05-1_hypmjq.jpg',
      sock1: 'White with orange design',
      sock2: 'White with orange design'
    },
    {
      name: 'Green Orchid',
      price: '89',
      description: 'A fun and mesmerizing design you will want to kick on for any occasion',
      imgURL: 'https://res.cloudinary.com/kacloud20/image/upload/v1640200919/project3/Sock2%20Photos/09-2_rltxln.jpg',
      sock1: 'White with aqua graphic',
      sock2: 'Black with aqua graphic'
    }
  ]
    await SockSquared.insertMany(socks)
    console.log('Created sock items!')

  db.close()
}

insertData()