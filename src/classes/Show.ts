import {Movie} from "./Movie";
import {Theatre} from "./Theatre";
import {RegisteredUser} from "./RegisteredUser";
import {Ticket} from "./Ticket";

export class Show{
    private static _idCounter = 0
    private readonly _id:number
    private _showTime:Date
    private _availableSeats:number
    private readonly _movie: Movie
    private readonly _theatre: Theatre

    constructor(theatre: Theatre, movie: Movie, showTime: Date) {
        this._id = Show._idCounter++;
        this._showTime = showTime;
        this._movie = movie;
        this._theatre = theatre;
        this._availableSeats = theatre.capacity
        theatre.addShow(this)
    }

    get id(): number {
        return this._id;
    }

    get showTime(): Date {
        return this._showTime;
    }

    set showTime(time: Date) {
        const otherShowOnTheTime = this.theatre.shows.find(show=> show.showTime === time)
        if(otherShowOnTheTime !== undefined){
            throw new Error(`Time conflict with show ${otherShowOnTheTime.id}`)
        }
        this._showTime = time;
    }

    get availableSeats(): number {
        return this._availableSeats;
    }

    set availableSeats(value: number) {
        this._availableSeats = value;
    }

    get movie(): Movie {
        return this._movie;
    }

    get theatre(): Theatre {
        return this._theatre;
    }

    bookTicket(user: RegisteredUser, seats: number): Ticket{
        if(seats <= 0) throw new Error('Minimum number of seats to be selected is 1')
        if(this.availableSeats < seats) throw new Error(`Only ${this.availableSeats}${seats} seats available`)

        const ticket: Ticket = new Ticket(user, this, seats, new Date())
        this._availableSeats -= seats
        user.ticketBookingHistory.push(ticket)
        return ticket
    }


}
