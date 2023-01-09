const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')
const db = require('./db')
require('dotenv').config()

//middleware
// app.use(morgan('tiny'))
app.use(cors())
app.use(express.json()) //req.body

const router = express.Router()
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})
module.exports = router

//ROUTES//

app.post('/API/v1-a/newAplicacao', async (req, res) => {
  try {
    const results = await db.query(
      'INSERT INTO aplicacoes (substanciaid, dosagem, data_horario, localaplicacaoid) VALUES ($1, $2, $3, $4) RETURNING *',
      [
        req.body.substanciaid,
        req.body.dosagem,
        req.body.data_horario,
        req.body.localaplicacaoid
      ]
    )
    res.status(200).json({
      status: 'success',
      data: {
        aplicacoes: results.rows[0]
      }
    })
  } catch (err) {
    console.error(err.message)
  }
})

// get all aplicacoes

app.get('/API/v1-a/getAllAplicacoes', async (req, res) => {
  try {
    const results = await db.query('SELECT * FROM aplicacoes')
    res.status(200).json({
      status: 'success',
      results: results.rows.length,
      data: {
        aplicacoes: results.rows
      }
    })
  } catch (err) {
    console.error(err.message)
  }
})

// get all Substancias

app.get('/API/v1-a/getAllSubstancias', async (req, res) => {
  try {
    const results = await db.query('SELECT * FROM substancias')
    res.status(200).json({
      status: 'success',
      results: results.rows.length,
      data: {
        substancias: results.rows
      }
    })
  } catch (err) {
    console.error(err.message)
  }
})

// get a aplicacao

app.get('/API/v1-a/getAplicacao/:id', async (req, res) => {
  try {
    const results = await db.query(
      'SELECT * FROM aplicacoes where aplicacao_id = $1',
      [req.params.id]
    )
    res.status(200).json({
      status: 'success',
      data: {
        aplicacoes: results.rows[0]
      }
    })
  } catch (err) {
    console.error(err.message)
  }
})

// get a Substancia

app.get('/API/v1-a/getSubstancia/:id', async (req, res) => {
  try {
    const result = await db.query(
      'SELECT * FROM substancias WHERE substancia_id = $1',
      [req.params.id]
    )
    res.status(200).json({
      status: 'success',
      data: {
        substancia: result.rows[0]
      }
    })
  } catch (err) {
    console.error(err.message)
  }
})

// update aplicacao

app.put('/API/v1-a/updateAplicacao/:id', async (req, res) => {
  try {
    const results = await db.query(
      'UPDATE aplicacoes SET substanciaid = $1, dosagem = $2, data_horario = $3, localaplicacaoid = $4 where aplicacao_id = $5 RETURNING *',
      [
        req.body.substanciaid,
        req.body.dosagem,
        req.body.data_horario,
        req.body.localaplicacaoid,
        req.params.id
      ]
    )
    res.status(200).json({
      status: 'success',
      data: {
        substancia: results.rows[0]
      }
    })
  } catch (err) {
    console.error(err.message)
  }
})

//delete aplicacao

app.delete('/API/v1-a/deleteAplicacao/:id', async (req, res) => {
  try {
    const results = await db.query(
      'DELETE FROM aplicacoes WHERE aplicacao_id = $1',
      [req.params.id]
    )
    res.status(204).json({
      status: 'sucess'
    })
  } catch (err) {
    console.error(err.message)
  }
})

//-------------------------------------------//
const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`Server has started on port ${port}`)
})
