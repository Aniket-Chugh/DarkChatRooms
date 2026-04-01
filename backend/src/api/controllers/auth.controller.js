import { RegisterDao } from "../../repositories/user.repository.js";
import { bcryptHash } from "../../utils/bcrypt.js";
import { registrationInputValidation } from "../../validation/input.registration.validation.js";

export const register = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).json({ message: "Body missing" });
        }


        const validation = registrationInputValidation({
            ...req.body,
            pass: req.body.password
        });

        console.log(validation);


        if (!validation.success) {
            return res.status(400).json({
                message: "Validation failed",
                errors: validation.errors
            });
        }


        const { username, displayName, email, pass } = validation.data;


        const hashedPass = await bcryptHash(pass);


        await RegisterDao({
            username,
            displayName,
            email,
            hashedPass
        });

        return res.status(201).json({
            message: "RegisterDao code worked"
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};
