import request from "supertest";
import {app} from "../src/server";

describe("Test des routes Express", () => {
    it("GET /api/hello - devrait répondre avec un message JSON", async () => {
        const response = await request(app).get("/api/hello");
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: "Hello, TypeScript!" });
    });
});
