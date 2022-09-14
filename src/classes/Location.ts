export class Location {
    private readonly _name: string
    private readonly _description: string | undefined

    constructor(name: string, description?: string) {
        this._name = name
        this._description = description
    }

    get name(): string {
        return this._name;
    }

    get description(): string | undefined {
        return this._description;
    }
}
