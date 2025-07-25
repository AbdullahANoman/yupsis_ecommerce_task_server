import dotenv from 'dotenv';
import path from 'path';

//NOTE this path.join((process.cwd())) works like you add the env with this directory
dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  NODE_ENV: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
};
