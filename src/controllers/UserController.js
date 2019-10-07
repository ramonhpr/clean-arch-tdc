class UserController {
    constructor(createUserInteractor) {
        this.createUserInteractor = createUserInteractor;
    }

    createUser(name) {
        this.createUserInteractor.execute(name);
    }
}

export default UserController;