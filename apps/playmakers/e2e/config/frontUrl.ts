import dotenv from "dotenv";
dotenv.config();
const env = process.env.NODE_ENV;
const url: string = env ? env : "https://www.playmakers.com";
export default url;
