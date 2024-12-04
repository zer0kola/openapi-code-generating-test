import { swaggerCommand } from './command/swagger';

async function main() {
  try {
    await swaggerCommand();
  } catch (error: any) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

void main();
