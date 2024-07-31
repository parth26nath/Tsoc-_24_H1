const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');
const { generateToken } = require('../utils/jwtUtils');
const prisma = new PrismaClient();

const register = async (email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const artist = await prisma.artist.create({
    data: {
      email,
      password: hashedPassword,
    },
  });

  const token = generateToken({ id: artist.id, email: artist.email });
  return { artistId: artist.id, token };
};

const login = async (email, password) => {
  const artist = await prisma.artist.findUnique({ where: { email } });

  if (artist && await bcrypt.compare(password, artist.password)) {
    const token = generateToken({ id: artist.id, email: artist.email });
    return { artistId: artist.id, token };
  } else {
    throw new Error('Invalid credentials');
  }
};

module.exports = { register, login };
