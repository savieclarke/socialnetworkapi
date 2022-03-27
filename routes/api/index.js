const router = require('express').Router();
const courseRoutes = require('./thoughtRoutes');
const studentRoutes = require('./UserRoutes');

router.use('/thought', thoughtRoutes);
router.use('/user', userRoutes);

module.exports = router;