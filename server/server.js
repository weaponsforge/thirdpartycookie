const express = require('express')
const PORT = process.env.PORT || 3001
const cookieParser = require('cookie-parser')
const path = require('path')
const cors = require('cors')
const app = express()
const cookieName = 'thirdparty'

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors())
app.use(express.static(path.join(__dirname, '..', 'public')))

app.get('/check', (req, res) => {
  res.cookie(cookieName, 'yes', {
    maxAge: 360000,
    sameSite: 'none',
    secure: true
  }).redirect('process')
})

app.get('/process', (req, res, next) => {
  const isEnabled = (req.cookies[cookieName] !== undefined)
  res.clearCookie(cookieName)

  if (isEnabled) {
    res.status(200).send({
      message: 'OK'
    })
  } else {
    next(new Error('Cookies are not set'))
  }
})

app.get('/hello', () => {
  res.status(200).send({
    message: 'hello'
  })
})

app.use((error, req, res, next) => {
  res.status(500).send({
    message: error.message
  })
})

app.listen(PORT, () => {
  console.log(`third party server running on http://localhost:${PORT}`)
})