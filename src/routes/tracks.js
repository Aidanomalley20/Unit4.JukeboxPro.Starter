const express = require('express');
const { PrismaClient } = require('@prisma/client');
const router = express.Router();
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  const tracks = await prisma.track.findMany();
  res.json(tracks);
});

router.get('/:id', async (req, res) => {
  const track = await prisma.track.findUnique({ where: { id: parseInt(req.params.id) } });
  res.json(track);
});

module.exports = router;
