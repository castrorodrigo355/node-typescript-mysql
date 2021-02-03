import { Request, Response, RequestHandler } from "express";
// import bcrypt from "bcrypt";
import MySQL from "../mysql/mysql";

export const getUsers: RequestHandler = (req: Request, res: Response) => {
    const query = `SELECT * FROM tusers`
    MySQL.executeQuery(query, (err: any, result: Object[]) => {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            })
        } else {
            res.json({
                ok: true,
                result
            })
        }
    })
};

export const getUserById: RequestHandler = async (req: Request, res: Response) => {
    const id = req.params.id;
    const query = `SELECT * FROM tusers WHERE user_id = ${id}`
    MySQL.executeQuery(query, (err: any, result: Object) => {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            })
        } else {
            res.json({
                ok: true,
                result
            })
        }
    })
};

export const createUser: RequestHandler = (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    const query = `INSERT INTO 
        tusers(user_name, user_email, user_password) 
        VALUES ('${name}', '${email}', '${password}');`
    MySQL.executeQuery(query, (err: any, result: Object) => {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            })
        } else {
            res.json({
                ok: true,
                result
            })
        }
    })
};

export const deleteUser: RequestHandler = async (req: Request, res: Response) => {
    const id = req.params.id;
    const query = `DELETE FROM tusers WHERE user_id = ${id};`
    MySQL.executeQuery(query, (err: any, result: Object) => {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            })
        } else {
            res.json({
                ok: true,
                result
            })
        }
    })
}

export const updateUser: RequestHandler = (req: Request, res: Response) => {
    const id = req.params.id;
    const { name, email } = req.body;

    const query = `UPDATE tusers SET user_name='${name}', user_email='${email}' WHERE user_id = ${id}`
    MySQL.executeQuery(query, (err: any, result: Object) => {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            })
        } else {
            res.json({
                ok: true,
                result
            })
        }
    })
};