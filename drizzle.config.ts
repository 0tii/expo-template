import type { Config } from 'drizzle-kit';
export default {
  schema: './data/schema/**/*.schema.ts',
  out: './data/migrations',
  driver: 'expo',
} satisfies Config;
