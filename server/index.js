const express = require('express')
const morgan = require('morgan')
const app = express()
// const cors = require('cors')
const pool = require('./db')
require('dotenv').config()

//middleware
// app.use(morgan('tiny'))
app.use(express.json()) //req.body

//ROUTES//

// create substancias

// app.post('/API/v1-a/newSubstancia', async (req, res) => {
//   try {
//     const { nome, meia_vidah, descricao, colaterais } = req.body
//     const newSubstancia = await pool.query(
//       'INSERT INTO substancias (nome, meia_vidah, descricao, colaterais) VALUES ($1, $2, $3, $4)',
//       [nome, meia_vidah, descricao, colaterais]
//     )
//     res.json(newSubstancia.rows[0])
//   } catch (err) {
//     console.error(err.message)
//   }
// })

// // get all substancias

// app.get('/API/v1-a/getallSubstancias', async (req, res) => {
//   try {
//     const allSubstancias = await pool.query('SELECT * FROM substancias')
//     res.json(allSubstancias.rows)
//   } catch (err) {
//     console.error(err.message)
//   }
// })

// // get a substancia

// app.get('/API/v1-a/getSubstancia/:id', async (req, res) => {
//   try {
//     const { id } = req.params
//     const substancia = await pool.query(
//       'SELECT * FROM substancias WHERE substancia_id = $1',
//       [id]
//     )
//     res.json(substancia.rows[0])
//   } catch (err) {
//     console.error(err.message)
//   }
// })

// // update substancia

// app.put('/API/v1-a/updateSubstancia/:id', async (req, res) => {
//   try {
//     const { id } = req.params
//     const { descricao } = req.body
//     const updateSubstancia = await pool.query(
//       'UPDATE substancias SET descricao = $1 WHERE substancias_id = $2',
//       [descricao, id]
//     )
//     res.json('Update realizado')
//   } catch (err) {
//     console.error(err.message)
//   }
// })

// //delete substancia

// app.delete('/API/v1-a/deleteSubstancia/:id', async (req, res) => {
//   try {
//     const { id } = req.params
//     const deleteSubstancia = await pool.query(
//       'DELETE FROM substancias WHERE substancias_id = $1',
//       [id]
//     )
//     res.json('Dado removido com sucesso')
//   } catch (err) {
//     console.error(err.message)
//   }
// })

app.post('/API/v1-a/newSubstancia', async (req, res) => {
  console.log(req)
})

// get all substancias

app.get('/API/v1-a/getallSubstancias', async (req, res) => {
  res.json({
    status: 'success',
    data: {
      substancia: 'enantato',
      meia_vida: 5,
      descrição: 'descrição',
      colaterais: 'colaterais'
    }
  })
})

// get a substancia

app.get('/API/v1-a/getSubstancia/:id', async (req, res) => {
  console.log(req)
})

// update substancia

app.put('/API/v1-a/updateSubstancia/:id', async (req, res) => {})

//delete substancia

app.delete('/API/v1-a/deleteSubstancia/:id', async (req, res) => {})

//-------------------------------------------//
const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`Server has started on port ${port}`)
})
