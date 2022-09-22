export abstract class IPaymentMethod {
    private _name: string

    abstract makePayment(): void


    get name(): string {
        return this._name;
    }
}
