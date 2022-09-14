export abstract class IUser{
    private static _idCounter = 0
    private readonly _id: number
    private _name: string


    protected constructor(name: string) {
        this._id = IUser._idCounter++;
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get id(): number {
        return this._id;
    }
}
