import request from "supertest";
import {app} from "../src/server";

describe("Test des routes Express", () => {
    it("GET /api/hello - devrait répondre avec un message JSON", async () => {
        const response = await request(app).get("/api/hello");
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: "Hello, TypeScript!" });
    });
});


class Bookstore {
    private static readonly BOOK_PRICE = 8;
    private static readonly DISCOUNTS = [0, 0.05, 0.1, 0.2, 0.25];

    public static amountSeries(
        nbTome1: number,
        nbTome2: number,
        nbTome3: number,
        nbTome4: number,
        nbTome5: number
    ): number {
        let books = [nbTome1, nbTome2, nbTome3, nbTome4, nbTome5];
        let totalPrice = 0;

        while (books.some((tome) => tome > 0)) {
            const uniqueBooks = books.filter((tome) => tome > 0).length;
            // Par exemple, si on a 2 tomes distincts, on prend DISCOUNTS[1] = 0.05
            // (car index 0 = 0 tomes distincts, index 1 = 2 tomes distincts, etc.)
            const discount = Bookstore.DISCOUNTS[uniqueBooks - 1] || 0;

            const price = uniqueBooks * Bookstore.BOOK_PRICE * (1 - discount);
            totalPrice += price;

            // On décrémente de 1 chaque tome présent
            books = books.map((tome) => (tome > 0 ? tome - 1 : 0));
        }

        // On arrondit pour éviter les soucis d'affichage
        return parseFloat(totalPrice.toFixed(2));
    }
}

// -----------------------------------------------------------------------------
// TEST SUR LA ROUTE EXPRESS
// -----------------------------------------------------------------------------
describe("Test des routes Express", () => {
    it("GET /api/hello - devrait répondre avec un message JSON", async () => {
        const response = await request(app).get("/api/hello");
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: "Hello, TypeScript!" });
    });
});

// -----------------------------------------------------------------------------
// TESTS UNITAIRES SUR LA FONCTION Bookstore.amountSeries
// -----------------------------------------------------------------------------
describe("Bookstore.amountSeries", () => {
    it("Devrait retourner 8 euros pour 1 seul tome (exemple : tome1=1)", () => {
        const total = Bookstore.amountSeries(1, 0, 0, 0, 0);
        expect(total).toBe(8);
    });

    it("Devrait retourner 8 euros pour 1 seul tome (exemple : tome5=1)", () => {
        const total = Bookstore.amountSeries(0, 0, 0, 0, 1);
        expect(total).toBe(8);
    });

    it("Devrait appliquer 5% de réduction pour 2 tomes distincts", () => {
        const total = Bookstore.amountSeries(1, 1, 0, 0, 0);
        expect(total).toBe(15.2);
    });

    it("Devrait appliquer 10% de réduction pour 3 tomes distincts", () => {
        const total = Bookstore.amountSeries(1, 1, 1, 0, 0);
        expect(total).toBe(21.6);
    });

    it("Devrait appliquer 20% de réduction pour 4 tomes distincts", () => {
        const total = Bookstore.amountSeries(1, 1, 1, 1, 0);
        expect(total).toBe(25.6);
    });

    it("Devrait appliquer 25% de réduction pour 5 tomes distincts", () => {
        const total = Bookstore.amountSeries(1, 1, 1, 1, 1);
        expect(total).toBe(30);
    });
});
