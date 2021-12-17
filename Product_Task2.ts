class Product {

    private productName: String;
    private productId: number;
    private unitPrice: number;
    private qty: number;

    constructor(id: number = 0) {
        this.productId = id;
    }

    get Name(): String {
        return this.productName
    }

    set Name(name: String) {
        this.productName = name
    }

    get Id(): number {
        return this.productId
    }

    get Price(): number {
        return this.unitPrice
    }

    set Price(price: number) {
        this.unitPrice = price
    }

    get Qty(): number {
        return this.qty
    }

    set Qty(qty: number) {
        this.qty = qty
    }

}

let p1: Product = new Product(1);

p1.Name="Laptop"

p1.Price=54647;

p1.Qty=34;



console.log(p1.Id)

console.log(p1.Name)

console.log(p1.Price)

console.log(p1.Qty)