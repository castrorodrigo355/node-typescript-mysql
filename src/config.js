import { config } from "dotenv";
config();

export const configApp = {
	mongoDBURL: process.env.DB_URI,
};
