import db from "../connections/db.connection.js";
import { signToken } from "../utils/jwt.util.js";

export const RegisterDao = async ({ username, displayName, email, hashedPass }) => {
    const connection = await db.getConnection();

    try {
        await connection.beginTransaction();

        const userRegistrationQuery = `
            INSERT INTO users (username, account_name, email, user_pass)
            VALUES (?, ?, ?, ?);
        `;

        const [result] = await connection.query(userRegistrationQuery, [
            username,
            displayName,
            email,
            hashedPass
        ]);

        const user_id = result.insertId;
        await connection.commit();


        const accessToken = signToken("access", { user_id, username });

        return {
            success: true,
            user: {
                id: user_id,
                username: username,
                email: email
            },
            accessToken: accessToken.token,
            expireIn: accessToken.expiresIn

        };

    } catch (error) {
        await connection.rollback();


        if (error.code === 'ER_DUP_ENTRY') {
            console.warn(`[RegisterDao] Duplicate entry attempt for email/username: ${email} / ${username}`);
            throw new Error("A user with that username or email already exists.");
        }

        console.error("[RegisterDao] Critical error during user registration:", error.message || error);

        throw error;

    } finally {
        connection.release();
    }
};
