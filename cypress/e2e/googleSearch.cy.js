import "cypress-plugin-xhr-toggle";

describe("google search", () => {
    it("should display three first title", () => {
        cy.visit(Cypress.env("BASE_URL"));
        cy.get("#L2AGLb").click();
        cy.get('input[name="q"]').type("vadesecure");
        cy.get("form").submit();
        cy.get("#search a h3").then((title) => {
            for (let i = 0; i < 3; i++) {
                cy.log(`${i + 1} title result : ${title[i].innerText}`);
            }
        });
    });
});
