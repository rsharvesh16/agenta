describe("Playground Prompt Test", function () {
    before(() => {
        cy.createVariant()
    })

    it("Should test prompt functionality in the Playground", () => {
        cy.get('[data-cy="testview-input-parameters-0"]').type("Germany")
        cy.get('[data-cy="testview-input-parameters-run-button"]').click()
        cy.get('[data-cy="testview-input-parameters-result"]').should("contain.text", "Loading...")
        cy.get('[data-cy="testview-input-parameters-result"]').should(
            "contain.text",
            "The capital of Germany is Berlin.",
        )
        cy.get(".ant-message-notice-content").should("not.exist")
    })

    after(() => {
        cy.cleanupVariantAndTestset()
    })
})
