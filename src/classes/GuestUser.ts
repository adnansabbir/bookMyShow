import {IUser} from "./IUser";

export class GuestUser extends IUser{

    constructor() {
        super('guest_user');
    }

    public register(username: string, password: string){

    }
}
