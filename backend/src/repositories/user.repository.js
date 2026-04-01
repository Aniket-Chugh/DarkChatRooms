import db from "../connections/db.connection.js"

export const RegisterDao = async ({ username, displayName, email, hashedPass }) => {
    const connection = await db.getConnection();

    try {

        await connection.beginTransaction();

        const UserRegistrationQuery = "INSERT INTO users(username,account_name,email,user_pass)values(?,?,?,?);";

        const [result] = await connection.query(UserRegistrationQuery, [username, displayName, email, hashedPass]);

        await connection.commit();

        console.log("user registered you mf");

    } catch (error) {

        await connection.rollback();
        console.log("An error occured while going data from backend to database you elon musk shit", error);
    }
    finally {
        await connection.release();
    }



}
