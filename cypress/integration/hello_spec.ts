describe('cypress', () => {

  it('check request body', () => {

    cy.server();
    cy.route({
      method: 'POST',
      url: '/public/data.json',
      onRequest: (xhr: any): void => {
        console.log('### onRequest', xhr)
        expect(xhr.request.body).to.deep.equal({
          name: 'cypress'
        })
      }
    })
    cy.visit('/public/index.html');

    cy.get('#button').click();

  })

})
