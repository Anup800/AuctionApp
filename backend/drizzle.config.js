import { drizzle } from "drizzle-orm/singlestore/driver";
import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';


export default defineConfig ({
    schema :'./db/index.js',
    out : './drizzle',
    dialect:'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL,
        port: 5432,
    },
});