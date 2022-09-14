import {Language} from "../enums/Language.enum";
import {Genre} from "../enums/Genre.enum";

export class Movie {
    private static _idCounter = 0
    private readonly _name: string
    private _ratings: number
    private readonly _language: Language
    private readonly _genre: Genre
    private _id: number

    /**
     * Returns a Movie Object
     * @param name
     * @param language
     * @param genre - Add a genre instance
     * @param rating
     */
    constructor(name: string, language: Language, genre: Genre, rating: number) {
        this._id = Movie._idCounter++;
        this._name = name;
        this._language = language;
        this._genre = genre;
        this._ratings = rating
    }

    get id(): number{
        return this._id
    }

    get name(): string {
        return this._name;
    }

    get ratings(): number {
        return this._ratings;
    }

    set ratings(value: number) {
        if(value > 10 || value < 0) throw new Error('Min rating is 0 & Max rating is 10')
        this._ratings = value;
    }

    get language(): Language {
        return this._language;
    }

    get genre(): Genre {
        return this._genre;
    }


}
