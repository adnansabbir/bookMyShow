import {IPaymentMethod} from "./IPaymentMethod";
import {Show} from "./Show";
import {IUser} from "./IUser";

export class Ticket{
    private static _idCounter = 0
    private readonly _id: number
    private readonly _bookingTime: Date
    private readonly _numberOfSeats: number
    private readonly _bookedShow: Show
    private readonly _owner: IUser
    private readonly paymentMethod: IPaymentMethod
    private _cancelled: boolean


    constructor(owner: IUser, bookedShow: Show, numberOfSeats: number, paymentMethod: IPaymentMethod) {
        this._id = Ticket._idCounter++;
        this._bookingTime = new Date();
        this._owner = owner;
        this._numberOfSeats = numberOfSeats;
        this._bookedShow = bookedShow;
        this._cancelled = false
        this.paymentMethod = paymentMethod
    }


    get id(): number {
        return this._id;
    }

    get bookingTime(): Date {
        return this._bookingTime;
    }

    get numberOfSeats(): number {
        return this._numberOfSeats;
    }

    get bookedShow(): Show {
        return this._bookedShow;
    }

    get owner(): IUser {
        return this._owner;
    }

    get cancelled():boolean{
        return this._cancelled
    }

    cancel(): Ticket {
        if(this.cancelled) throw new Error('Ticket already cancelled')
        this._cancelled = true;
        return this
    }

    public toString = (): string =>{
        return JSON.stringify({
            ticketId: this.id,
            bookingTime: this.bookingTime,
            show: this.bookedShow.id,
            movie: this.bookedShow.movie.name,
            theatre: this.bookedShow.theatre.name,
            numberOfSeats: this.numberOfSeats,
            cancelled: this.cancelled,
            paymentMethod: this.paymentMethod.name
        })
    }
}
