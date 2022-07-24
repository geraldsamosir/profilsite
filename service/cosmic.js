const Cosmic = require('cosmicjs')
const api = Cosmic()
const bucket = api.bucket({
  slug: 'profilesite-production',
  read_key: process.env.COSMIC_READ_KEY
})

export  { bucket} 