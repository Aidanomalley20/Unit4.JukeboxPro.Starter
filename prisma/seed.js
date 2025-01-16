const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.track.createMany({
    data: Array.from({ length: 20 }, (_, i) => ({
      title: `Track ${i + 1}`,
      artist: `Artist ${i + 1}`,
    })),
  });
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
