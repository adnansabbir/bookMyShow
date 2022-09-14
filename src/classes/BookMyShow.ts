import {Theatre} from "./Theatre";
import {Show} from "./Show";

export class BookMyShow{
    private readonly _theatres: Array<Theatre>
    private _name: string
    private readonly moviesMap: Record<string, Array<Show>>

    constructor(name: string, theaters?: Theatre[]) {
        this._name = name
        this._theatres = theaters || new Array<Theatre>();
        this.moviesMap = {}
        this.generateMovieMap()
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

    public toString(): string{
        return JSON.stringify({
            name: this.name,
            totalTheatres: this.theatres.length,
            totalMovies: Object.keys(this.moviesMap).length
        })
    }
}
