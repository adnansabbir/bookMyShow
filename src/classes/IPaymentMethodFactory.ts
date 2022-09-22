import {PaymentMethodsTypes} from "../enums/PaymentMethods.enum";
import {IPaymentMethod} from "./IPaymentMethod";

export abstract class IPaymentMethodFactory {
    private name: string
    private availableMethods: string[]

    abstract createPaymentMethod(typeName: PaymentMethodsTypes):IPaymentMethod
}
