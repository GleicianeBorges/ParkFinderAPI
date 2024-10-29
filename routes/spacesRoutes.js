import express from 'express';

const router = express.Router();


router.get('/', (req, res) => {
    // pegar vagas
    res.send('GET/spaces');
})

router.post('/', (req, res) => {
    // adicionar vaga
    res.send('POST/spaces');
})

router.delete('/:id', (req, res) => {
    // deletar vaga
    res.send('DELETE/spaces/:id');
})

export default router;