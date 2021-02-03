import { Response, RequestHandler } from "express";
import UserModel, { User } from "../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const userLogin: RequestHandler = (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email }, (err: any, user: User) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            })
        }

        if (!user) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: "User or password incorrect !!!"
                }
            })
        }

        if (!bcrypt.compareSync(password, user.password)) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: "Incorrect password !!!"
                }
            })
        }

        let token = jwt.sign(
            { user },
            'my-secret-node',
            { expiresIn: 60 * 60 }
        )

        res.json({
            ok: true,
            user,
            token
        })
    })
};
