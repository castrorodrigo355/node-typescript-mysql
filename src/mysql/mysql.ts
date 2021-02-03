import mysql from "mysql";

export default class MySQL {

    private static _instance: MySQL;

    cnn: mysql.Connection;
    connected: boolean = false;

    constructor() {
        console.log('Initialized Class');
        this.cnn = mysql.createConnection({
            host: process.env.LOCAL_SERVER_HOST,
            user: process.env.LOCAL_SERVER_USER,
            password: process.env.LOCAL_SERVER_PASSWORD,
            database: process.env.LOCAL_SERVER_DATABASE,
        })

        this.connectDB()
    }

    public static get instance() {
        return this._instance || (this._instance = new this());
    }

    static executeQuery(query: string, callback: Function) {
        this.instance.cnn.query(query, (err, results: Object[], fields) => {
            if (err) {
                console.log("Error en query");
                console.log(err);
                return callback(err)
            }

            if (results.length === 0) {
                callback("El registro solicitado no existe !!!")
            } else {
                callback(null, results);
            }
        })
    }

    private connectDB() {
        this.cnn.connect((err: mysql.MysqlError) => {
            if (err) {
                console.log(err.message);
                return;
            }
            this.connected = true;
            console.log('Database Connected');
        })
    }
}