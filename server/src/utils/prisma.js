import { PrismaClient } from '@prisma/client';
let prisma;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
}
// `stg` or `dev`
else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }

  prisma = global.prisma;
}

export default prisma;
