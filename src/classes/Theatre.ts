import {Show} from "./Show";
import {Location} from "./Location";

export class Theatre{
    private static _idCounter = 0
    private readonly _id: number
    private readonly _name: string
    private readonly _location: Location
    private _capacity: number
    private readonly _shows: Array<Show>


    constructor(name: string, location: Location, capacity: number) {
        this._id = Theatre._idCounter++;
        this._name = name;
        this._location = location;
        this._capacity = capacity;
        this._shows = new Array<Show>()
    }

    public updateShow(oldShow: Show, newShow: Show): Show{
        for(let i = 0; i< this.shows.length; i++){
            if(this.shows[i].id === oldShow.id){
                this.shows[i] = newShow
                return newShow
            }
        }
        throw new Error(`Show ${oldShow.id} not in theatre ${this.id}`)
    }

    get id(): number {
        return this._id;
    }

    get shows(): Array<Show> {
        return this._shows;
    }

    addShow(show: Show): void{
        this._shows.push(show)
    }

    get name(): string {
        return this._name;
    }

    get capacity(): number {
        return this._capacity;
    }

    set capacity(value: number){
        if(value < 1) throw new Error('Capacity cannot be less than 1')
        this._capacity = value
    }
}
