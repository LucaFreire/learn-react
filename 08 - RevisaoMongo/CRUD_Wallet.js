class Wallet {
    constructor(name, date, description, balance, historico) {
        this.name = name;
        this.date = date;
        this.description = description;
        this.balance = balance;
        this.historico = historico;
    }
}

class Historic {
    constructor(date, value) {
        this.date = date;
        this.value = value;
    }
}

class Functions {
    static AddOne(Product, db) {
        db.insertOne(Product);
    };

    static AddMany(Product, db) {
        db.insertMany(Product);
    };

    static UpdateOne(_id, newProduct, db) {
        db.UpdateOne(
            { _id: ObjectId(_id) },
            { $set: { newProduct } }
        );
    };

    static DeleteOne(Product, db) {
        db.DeleteOne(Product);
    };
    
    static DeleteOne(Product, db) {
        db.DeleteOne(Product);
    };
}

use("revisao")

const historic = new Historic(new Date(), 1000);
const wallet = new Wallet('murill', new Date(), 'description1', 1000, historic)

Functions.AddOne(wallet);



