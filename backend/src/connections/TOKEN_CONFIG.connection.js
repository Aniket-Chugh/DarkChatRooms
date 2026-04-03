import dotenv from "dotenv"
dotenv.config

const TOKEN_CONFIG = {
    access: {
        secret: process.env.JWT_ACCESS_SECRET,
        expiresIn: "15m",
    },
    refresh: {
        secret: process.env.JWT_REFRESH_SECRET,
        expiresIn: "7d",
    },
};

export default TOKEN_CONFIG;
