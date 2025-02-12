import { Logger } from '@nestjs/common';
import * as dotenv from 'dotenv';

dotenv.config();

export const LOG = new Logger((process.env.NODE_ENV ?? 'dev').toUpperCase());