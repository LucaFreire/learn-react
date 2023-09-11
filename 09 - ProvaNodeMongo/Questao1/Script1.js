class Music {
    constructor(autor, record, durationTime, releaseYear, style) {
        this.autor = autor;
        this.record = record;
        this.durationTime = durationTime;
        this.releaseYear = releaseYear;
        this.style = style;
    }
}

class Autor {
    constructor(name, birthDate) {
        this.name = name;
        this.birthDate = birthDate;
    }
}

class Record {
    constructor(name, address, CNPJ) {
        this.name = name;
        this.address = address;
        this.CNPJ = CNPJ;
    }
}

class Functions {

    static Insert(db, Object) {
        db.insertOne(Object)
    };

    static Update(db, id, Object) {
        db.updateOne(
            { _id: ObjectId(id) },
            { $set: Object }
        );
    };

    static Delete(db, id) {
        db.deleteOne(id)
    };

    static FindById(db, id) {
        return db.find({ _id: ObjectId(id) })
    };

    static GetAll(db) {
        return db.find();
    };
}

use('Prova')

const autor = new Autor('Alisson Ferreira', '01-01-2000');
const record = new Autor("Country Alisson Records", 'Curitiba', '111111111');
const music = new Music(autor, record, 1.5, 2023, 'Modão');

// Para Executar as funções, apenas tire os comentários e selecione tudo

// Functions.Insert(db.Prova, music);

// music.style = 'Modão Nome Alterado';
// Functions.Update(db.Prova, '64f716e74c092ede7a281d4e', music);

// Functions.Delete(db.Prova, music);

// Functions.FindById(db.Prova, '64f716e74c092ede7a281d4e');

// Functions.GetAll(db.Prova);