export default function globalerr(err, req, res, next) {
  console.error(err)

  if (err.name === 'ValidationError') {
    return res.status(400).json({ error: err.message })
  }


  if (err.name === 'CastError') {
    return res.status(400).json({ error: 'Invalid id' })
  }


  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({ error: 'Invalid JSON body' })
  }


  res.status(err.statusCode || 500).json({
    error: err.message || 'Something went wrong',
  })
}