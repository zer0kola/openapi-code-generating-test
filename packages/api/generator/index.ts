import { swaggerCommand } from './command/command';

try {
  void swaggerCommand();
} catch (error: any) {
  console.error('Error:', error.message);
  process.exit(1);
}
