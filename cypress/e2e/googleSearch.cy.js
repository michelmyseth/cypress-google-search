import "cypress-plugin-xhr-toggle";

describe("google search", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("BASE_URL"));
        cy.get("#L2AGLb").click();
        cy.get('input[name="q"]').type("vadesecure");
        cy.get('input[value="Recherche Google"]').first().click();
    });

    it("should display three first title", () => {
        cy.get("#search a h3").then((title) => {
            cy.log(`1 title result : ${title[0].innerText}`);
            cy.get("#search .g.Ww4FFb a h3").then((title) => {
                for (let i = 0; i < 2; i++) {
                    cy.log(`${i + 2} title result : ${title[i].innerText}`);
                }
            });
        });
    });

    it("expect first title to not equal les plus beaux", () => {
        cy.get("#search a h3").then((title) => {
            const firstTitle = title[0].innerText;
            expect(firstTitle).not.equal("les plus beaux");
        });
    });
});
