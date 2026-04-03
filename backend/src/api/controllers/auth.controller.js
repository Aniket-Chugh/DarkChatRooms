import { RegisterDao } from "../../repositories/user.repository.js";
import { bcryptHash } from "../../utils/bcrypt.js";
import { registrationInputValidation } from "../../validation/input.registration.validation.js";
import { cookieOptions } from "../../connections/cookies.connection.js";

export const register = async (req, res) => {
    try {
        if (!req.body || typeof req.body !== 'object') {
            return res.status(400).json({
                success: false,
                message: "Invalid request. Data is missing."
            });
        }


        const validation = registrationInputValidation({
            ...req.body,
            pass: req.body.password
        });


        if (!validation.success) {
            return res.status(400).json({
                success: false,
                message: "Validation failed",
                errors: validation.errors
            });
        }

        const { username, displayName, email, pass } = validation.data;

        const hashedPass = await bcryptHash(pass);

        const data = await RegisterDao({
            username,
            displayName,
            email,
            hashedPass
        });


        const expiryTime = Number(data?.expireIn) || 900000;

        res.cookie("accessToken", data.accessToken, cookieOptions(expiryTime));


        return res.status(201).json({
            success: true,
            message: "User registered successfully.",
        });

    } catch (error) {
        console.error(`[Registration_Controller_Error]:`, error);

        if (error.code === 'ER_DUP_ENTRY' || error.message.includes("exists")) {
            return res.status(409).json({
                success: false,
                message: "A user with this email or username already exists."
            });
        }

        return res.status(500).json({
            success: false,
            message: "An unexpected error occurred. Please try again later."
        });
    }
};
