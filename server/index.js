const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')

//middleware
app.use(cors())
app.use(express.json()) //req.body

//ROUTES//

// create substancias

app.post('/substancias', async (req, res) => {
  try {
    const { nome, meia_vidah, descricao, colaterais } = req.body
    const newSubstancia = await pool.query(
      'INSERT INTO substancias (nome, meia_vidah, descricao, colaterais) VALUES ($1, $2, $3, $4)',
      [nome, meia_vidah, descricao, colaterais]
    )
    res.json(newSubstancia.rows[0])
  } catch (err) {
    console.error(err.message)
  }
})

// get all substancias

app.get('/substancias', async (req, res) => {
  try {
    const allSubstancias = await pool.query('SELECT * FROM substancias')
    res.json(allSubstancias.rows)
  } catch (err) {
    console.error(err.message)
  }
})

// get a substancia

app.get('/substancias/:id', async (req, res) => {
  try {
    const { id } = req.params
    const substancia = await pool.query(
      'SELECT * FROM substancias WHERE substancia_id = $1',
      [id]
    )
    res.json(substancia.rows[0])
  } catch (err) {
    console.error(err.message)
  }
})

// update substancia

app.put('substancias/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { descricao } = req.body
    const updateSubstancia = await pool.query(
      'UPDATE substancias SET descricao = $1 WHERE substancias_id = $2',
      [descricao, id]
    )
    res.json('Update realizado')
  } catch (err) {
    console.error(err.message)
  }
})

//delete substancia

app.delete('/substancias/:id', async (req, res) => {
  try {
    const { id } = req.params
    const deleteSubstancia = await pool.query(
      'DELETE FROM substancias WHERE substancias_id = $1',
      [id]
    )
    res.json('Dado removido com sucesso')
  } catch (err) {
    console.error(err.message)
  }
})

//-------------------------------------------//

app.listen(5000, () => {
  console.log('server has started on port 5000')
})
