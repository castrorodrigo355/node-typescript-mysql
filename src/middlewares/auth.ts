import jwt from "jsonwebtoken";

export const verifyToken = (req: any, res: any, next: any) => {
    let token = req.headers['token']
    jwt.verify(token, 'my-secret-node', (err: any, decoded: any) => {
        if (err) return res.status(401).json({ ok: false, err })
        req.user = decoded.user
        next()
    })
}