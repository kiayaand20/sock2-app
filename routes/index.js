import { Router } from 'express'
import socksRoutes from './socks.js'
import usersRoutes from './users.js'

const router = Router()

router.get('/', (req, res) => res.send('This is the api root!'))

router.use('/', usersRoutes)
router.use('/', socksRoutes)

export default router