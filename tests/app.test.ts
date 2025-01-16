import {Bookstore} from '../src/server';

describe("Bookstore.amountSeries", () => {
    it("Classes valides, 0/1 livre", () => {
        const total = Bookstore.amountSeries(1, 0, 0, 0, 0);
        expect(total).toEqual(8);
    });

    it("Classes valides, 0/1 livre", () => {
        const total = Bookstore.amountSeries(0, 0, 0, 0, 1);
        expect(total).toEqual(8);
    });

    it("Classes valides 2 livres", () => {
        const total = Bookstore.amountSeries(2, 0, 0, 0, 0);
        expect(total).toEqual(16);
    });

    it("Classes valides 2 livres", () => {
        const total = Bookstore.amountSeries(0, 0, 0, 1, 1);
        expect(total).toEqual(16*0.95);
    });

    it("Classes valides 3 livres", () => {
        const total = Bookstore.amountSeries(3, 0, 0, 0, 0);
        expect(total).toEqual(24);
    });

    it("Classes valides 3 livres", () => {
        const total = Bookstore.amountSeries(1, 0, 0, 0, 2);
        expect(total).toEqual(8+16*0.95);
    });

    it("Classes valides 3 livres", () => {
        const total = Bookstore.amountSeries(1, 0, 1, 0, 1);
        expect(total).toEqual(24*0.9);
    });
});

