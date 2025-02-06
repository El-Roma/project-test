import {Bookstore} from '../src/server';

describe("Bookstore.amountSeries", () => {
    it("Devrait retourner le prix de base pour un seul livre", () => {
        const total = Bookstore.amountSeries(1, 0, 0, 0, 0);
        expect(total).toEqual(8);
    });

    it("Devrait appliquer une réduction de 5% pour 2 livres différents", () => {
        const total = Bookstore.amountSeries(1, 1, 0, 0, 0);
        expect(total).toEqual(16 * 0.95);
    });

    it("Devrait appliquer une réduction de 10% pour 3 livres différents", () => {
        const total = Bookstore.amountSeries(1, 1, 1, 0, 0);
        expect(total).toEqual(24 * 0.9);
    });

    it("Devrait appliquer une réduction de 20% pour 4 livres différents", () => {
        const total = Bookstore.amountSeries(1, 1, 1, 1, 0);
        expect(total).toEqual(32 * 0.8);
    });

    it("Devrait appliquer une réduction de 25% pour 5 livres différents", () => {
        const total = Bookstore.amountSeries(1, 1, 1, 1, 1);
        expect(total).toEqual(40 * 0.75);
    });

    it("Devrait calculer correctement pour un mix de livres (2 tome1, 1 tome2)", () => {
        const total = Bookstore.amountSeries(2, 1, 0, 0, 0);
        expect(total).toEqual(16 * 0.95 + 8);
    });
});