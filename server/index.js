const express = require('express')
const morgan = require('morgan')
const app = express()
// const cors = require('cors')
const db = require('./db')
require('dotenv').config()

//middleware
// app.use(morgan('tiny'))
app.use(express.json()) //req.body

//ROUTES//

app.post('/API/v1-a/newSubstancia', async (req, res) => {
  try {
    const results = await db.query(
      'INSERT INTO substancias (nome, meia_vidah, descricao, colaterais) VALUES ($1, $2, $3, $4) RETURNING *',
      [
        req.body.nome,
        req.body.meia_vidah,
        req.body.descricao,
        req.body.colaterais
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

// get all substancias

app.get('/API/v1-a/getallSubstancias', async (req, res) => {
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

// get a substancia

app.get('/API/v1-a/getSubstancia/:id', async (req, res) => {
  try {
    const results = await db.query(
      'SELECT * FROM substancias where substancia_id = $1',
      [req.params.id]
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

// update substancia

app.put('/API/v1-a/updateSubstancia/:id', async (req, res) => {
  try {
    const results = await db.query(
      'UPDATE substancias SET nome = $1, meia_vidah = $2, descricao = $3, colaterais = $4 where substancia_id = $5 RETURNING *',
      [
        req.body.nome,
        req.body.meia_vidah,
        req.body.descricao,
        req.body.colaterais,
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

//delete substancia

app.delete('/API/v1-a/deleteSubstancia/:id', async (req, res) => {
  try {
    const results = await db.query(
      'DELETE FROM substancias WHERE substancia_id = $1',
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
