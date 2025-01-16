const express = require('express');
const { PrismaClient } = require('@prisma/client');
const authenticateToken = require('../middleware/authenticateToken');
const router = express.Router();
const prisma = new PrismaClient();

router.use(authenticateToken);

router.get('/', async (req, res) => {
  const playlists = await prisma.playlist.findMany({
    where: { userId: req.user.id },
  });
  res.json(playlists);
});

router.post('/', async (req, res) => {
  const { name, description, trackIds } = req.body;

  const playlist = await prisma.playlist.create({
    data: {
      name,
      description,
      userId: req.user.id,
      tracks: { connect: trackIds.map((id) => ({ id })) },
    },
  });

  res.json(playlist);
});

module.exports = router;
