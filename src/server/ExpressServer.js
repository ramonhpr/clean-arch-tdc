import express from 'express';
import bodyParser from 'body-parser';

class ExpressServer {
    constructor(settings, userController) {
        this.port = settings.port;
        this.userController = userController;
        this.app = express();
    }

    start() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.post('/user', (req, res) => {
            try {
                this.userController.createUser(req.body.name);
                res.end();
            } catch (error) {
                res.status(500).send(error.message);
            }
        });
        this.app.listen(this.port, () => console.log('Server started'));
    }
}

export default ExpressServer;