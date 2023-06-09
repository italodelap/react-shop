describe("The Home Page", () => {
	it("successfully loads", () => {
		cy.visit("/");
		cy.findByRole("heading", {
			name: /⚡ ⚛️ Typescript & React Template/i,
		}).should("exist");
	});
});
