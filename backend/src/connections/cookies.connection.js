import dotenv from "dotenv"
dotenv.config();
const isProduction = process.env.NODE_ENV === "production";

export const cookieOptions = (expiryTime) => ({
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "none" : "lax",
    maxAge: expiryTime
});
