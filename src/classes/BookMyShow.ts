import {PaymentMethodsTypes} from "../enums/PaymentMethods.enum";
import {IPaymentMethodFactory} from "./IPaymentMethodFactory";
import {RegisteredUser} from "./RegisteredUser";
import {Theatre} from "./Theatre";
import {Show} from "./Show";
import {Ticket} from "./Ticket";

export class BookMyShow{
    private readonly _theatres: Array<Theatre>
    private _name: string
    private readonly moviesMap: Record<string, Array<Show>>
    private readonly paymentMethodFactory: IPaymentMethodFactory

    constructor(name: string, paymentMethodFactory: IPaymentMethodFactory) {
        this._name = name
        this._theatres = new Array<Theatre>();
        this.moviesMap = {}
        this.generateMovieMap()
        this.paymentMethodFactory = paymentMethodFactory
    }

    generateMovieMap(){
        for(let theatre of this.theatres){
            const shows = theatre.shows
            for(let show of shows){
                if(this.moviesMap.hasOwnProperty(show.movie.name)){
                    this.moviesMap[show.movie.name].push(show)
                }else {
                    this.moviesMap[show.movie.name] = [show]
                }
            }
        }
    }

    get theatres(): Array<Theatre> {
        return this._theatres;
    }

    addTheatre(theatre: Theatre) {
        this._theatres.push(theatre);
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    searchShow(name: string): Show[]{
        const result: Show[] = []
        Object.keys(this.moviesMap).forEach(name=> {
            if(name.includes(name)){
                result.push(...this.moviesMap[name])
            }
        })

        return result
    }

    bookTicket(user: RegisteredUser, show: Show, seats: number, paymentMethodType: PaymentMethodsTypes): Ticket{
        if(seats <= 0) throw new Error('Minimum number of seats to be selected is 1')
        if(show.availableSeats < seats) throw new Error(`Only ${show.availableSeats}/${seats} seats available`)

        const paymentMethod = this.paymentMethodFactory.createPaymentMethod(paymentMethodType)
        const ticket: Ticket = new Ticket(user, show, seats, paymentMethod)
        show.availableSeats -= seats
        user.ticketBookingHistory.push(ticket)
        return ticket
    }

    public toString(): string{
        return JSON.stringify({
            name: this.name,
            totalTheatres: this.theatres.length,
            totalMovies: Object.keys(this.moviesMap).length
        })
    }
}
