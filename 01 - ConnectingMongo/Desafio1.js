// Desafio: Crie um catálogo de produtos onde você pode adicionar, atualizar e excluir informações sobre os produtos.
// Cada produto pode ter um nome, descrição, preço, categoria e quantidade em estoque.

class Product {
    constructor(name, description, price, categoria, qtdEstoque) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.categoria = categoria;
        this.qtdEstoque = qtdEstoque;
    }
}

class Functions {
    static AddOne(Product, db) {
        db.insertOne(Product)
    }

    static AddMany(Product, db) {
        db.insertMany(Products)
    }

    static UpdateOne(_id, newProduct, db) {
        db.UpdateOne(
            { _id: ObjectId(_id) },
            { $set: { newProduct } }
        )
    }

    static UpdateMany(_id, newProduct, db) {
        db.UpdateOne(
            { _id: ObjectId(_id) },
            { $set: { newProduct } }
        )
    }

    static DeleteOne(Product, db) {
        db.DeleteOne(Product)
    }

    static DeleteMany(Product, db) {
        db.DeleteMany(Product)
    }

    static ShowAll(db) {
        return db.find()
    }
}

use("aula1")

const prod1 = new Product("Carro", "Carro muito bom", 1000, "Carros", 3)
const prod2 = new Product("Carro2", "Carro muito bom2", 2000, "Carros", 5)
const arrayProds = [prod1, prod2]

Functions.AddOne(prod1, db.Exercicio)
Functions.AddMany(arrayProds, db.Exercicio)

Functions.DeleteMany(prod2, db.Exercicio);
Functions.DeleteOne(prod2, db.Exercicio);

Functions.UpdateOne("64db849eaa1a7ebfb321f209", prod2, db.Exercicio);
Functions.UpdateMany("64db849eaa1a7ebfb321f209", prod2, db.Exercicio);

Functions.ShowAll(db.Exercicio)