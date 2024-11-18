import express from 'express';
const router = express.Router();

router.post('/', (req, res) => {
    res.send('Napravi novu narudžbu');
});
export default router;

function Narudzba(id, naruceni_proizvodi) {
    this.id = id;
    this.naruceni_proizvodi = naruceni_proizvodi;
}

const narudzba = new Narudzba(1, [
    {id: 1, velicina: 'M', narucena_kolicina: 2},
    {id: 3, velicina: 'onesize', narucena_kolicina: 1}
]);

function Narudzba(id, naruceni_proizvodi) {
    this.id = id;
    this.naruceni_proizvodi = naruceni_proizvodi;
    this.ukupnaCijena = function () {
    let ukupno = this.naruceni_proizvodi.reduce((suma, trenutni_proizvod) => {
    let proizvod_obj = proizvodi.find(proizvod => proizvod.id == trenutni_proizvod.id);
    return suma + proizvod_obj.cijena * trenutni_proizvod.narucena_kolicina;
    }, 0); 
    return ukupno;
    };
}

const narudzba = new Narudzba(1, [
    { id: 1, velicina: 'M', narucena_kolicina: 2 },
    { id: 3, velicina: 'onesize', narucena_kolicina: 1 }
]);
console.log(narudzba.ukupnaCijena()); 

class Proizvod {
    constructor(id, naziv, cijena, velicine) {
        this.id = id;
        this.naziv = naziv;
        this.cijena = cijena;
        this.velicine = velicine;
    }
}
const proizvodi = [
    new Proizvod(1, 'Obična crna majica', 100, ['XS', 'S', 'M', 'L']),
    new Proizvod(2, "Levi's 501 traperice", 110, ['S', 'M', 'L']),
    new Proizvod(3, 'Zimska kapa', 40, 'onesize'),
    new Proizvod(4, 'Čarape Adidas', 20, ['34-36', '37-39', '40-42']),
    new Proizvod(5, 'Tenisice Nike', 200, ['38', '39', '40', '41', '42', '43', '44', '45'])
];
class Narudzba {
    constructor(id, naruceni_proizvodi) {
        this.id = id;
        this.naruceni_proizvodi = naruceni_proizvodi;
    }
    get ukupnaCijena() {
        let ukupno = this.naruceni_proizvodi.reduce((suma, currProizvod) => {
            let pronadeni_proizvod = proizvodi.find(p => p.id == currProizvod.id);
            console.log(pronadeni_proizvod);
            return suma + pronadeni_proizvod.cijena * currProizvod.narucena_kolicina;
        }, 0);
        return ukupno;
    }
}
    // dummy narudžba
const narudzba = new Narudzba(1, [
    { id: 1, velicina: 'M', narucena_kolicina: 2 },
    { id: 3, velicina: 'onesize', narucena_kolicina: 1 }
]);
console.log(narudzba.ukupnaCijena()); 

let narudzbe = [];
router.post('/', (req, res) => {
let podaci = req.body;let naruceni_proizvodi = podaci.naruceni_proizvodi;
if (!Array.isArray(naruceni_proizvodi) || naruceni_proizvodi.length == 0) {
return res.status(400).json({ message: 'Nema podataka' });
}
let latest_id = narudzbe.length ? narudzbe.at(-1).id + 1 : 1; 
let narudzba_obj = new Narudzba(latest_id, naruceni_proizvodi);
narudzbe.push(narudzba_obj);
return res.status(201).json(podaci); 
});