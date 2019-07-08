describe("Creating an account", () => {
    it("we can create an account using email and password", () => {
        cy.visit("/")
            .server()
            .route("POST", "**/api/users")
            .as("createUser")
            .get('a[data-testid="create-account-link"]')
            .click()
            .url()
            .should("include", "/users/create")
            .get("#email")
            .type("testemail@brookzerker.com")
            .get("#name")
            .type("Test User")
            .get("#password")
            .type("1234qwfp")
            .get('[data-testid="create-account"]')
            .click()
            .wait("@createUser")
            .its("status")
            .should("eq", 201);
    });
});
