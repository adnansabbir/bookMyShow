import {IUser} from "./IUser";
import {Ticket} from "./Ticket";

export class RegisteredUser extends IUser{
    private _ticketBookingHistory: Array<Ticket>

    constructor(name: string) {
        super(name);
        this._ticketBookingHistory = new Array<Ticket>();
    }

    get ticketBookingHistory(): Array<Ticket> {
        return this._ticketBookingHistory;
    }

    set ticketBookingHistory(value: Array<Ticket>) {
        this._ticketBookingHistory = value;
    }

    login(username:string, password: string){

    }
}
