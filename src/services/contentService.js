const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const uploadContent = async (title, description, files, artistId) => {
  const content = await prisma.content.create({
    data: {
      title,
      description,
      files,
      artistId,
    },
  });

  return { contentId: content.id, status: 'Content uploaded' };
};

module.exports = { uploadContent };
