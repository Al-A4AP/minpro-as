// Vercel Serverless Entry Point
// This file wraps the Express app as a Vercel serverless function.
// Vercel detects "api/index.ts" at root and treats it as a serverless handler.

import "dotenv/config";
import { initializeRedis } from "../backend/src/lib/redis.js";
import app from "../backend/src/app.js";

// Initialize Redis once (stateless between invocations is fine for Upstash HTTP)
initializeRedis();

export default app;
