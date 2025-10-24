import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  console.log('Seed placeholder - add demo materials/types here.');
}
main().finally(()=>prisma.$disconnect());
