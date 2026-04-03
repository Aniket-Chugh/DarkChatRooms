import jwt from "jsonwebtoken";
import crypto from "crypto";
import TOKEN_CONFIG from "../connections/TOKEN_CONFIG.connection.js";

export const signToken = (type, payload) => {
    try {
        console.log(type);
        if (!type || typeof type !== "string") {
            throw new Error("Token type must be a valid string");
        }

        const config = TOKEN_CONFIG[type];

        if (!config) {
            throw new Error(`Invalid token type: ${type}`);
        }

        const { secret, expiresIn } = config;

        if (!secret) {
            throw new Error(`Secret missing for ${type}`);
        }

        if (!expiresIn) {
            throw new Error(`expiresIn missing for ${type}`);
        }

        if (!payload || typeof payload !== "object") {
            throw new Error("Payload must be a valid object");
        }

        const tokenPayload = { ...payload, tokenType: type };

        const token = jwt.sign(tokenPayload, secret, {
            expiresIn: expiresIn,
            jwtid: crypto.randomUUID(),
            issuer: "simchat",
            audience: "chat-audience"
        });

        return { token, expiresIn };

    } catch (error) {
        console.error("JWT Sign Error:", error.message);
        throw new Error(`Token generation failed: ${error.message}`);
    }
};

export const verifyToken = (type, token) => {
    try {
        if (!type || typeof type !== "string") {
            throw new Error("Token type must be a valid string");
        }
        if (!token || typeof token !== "string") {
            throw new Error("Token is invalid");
        }

        const config = TOKEN_CONFIG[type];
        if (!config) {
            throw new Error(`Invalid token type: ${type}`);
        }

        const { secret } = config;

        if (!secret || typeof secret !== "string") {
            throw new Error("Secret is invalid");
        }

        const decoded = jwt.verify(token, secret, {
            issuer: "simchat",
            audience: "chat-audience"
        });

        if (decoded.tokenType && decoded.tokenType !== type) {
            throw new Error("Token type mismatch");
        }

        return decoded;

    } catch (error) {
        console.error("Error occurred while verifying the token:", error.message);
        throw new Error(`Token verification failed: ${error.message}`);
    }
};
