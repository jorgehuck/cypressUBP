/// <reference types="cypress" />

describe("Test de Servicios", () => {
  it("GET provincia: Cordoba", () => {
    
    cy.request({
      method: "GET",
      url: "https://apis.datos.gob.ar/georef/api/provincias?nombre=Cordoba",
    }).then((response) => {
      expect(response.status).to.eq(200);
      // verifico que sea un solo resultado
      expect(response.body.cantidad).to.eq(1);
      expect(response.body.provincias[0].nombre).to.eq('Córdoba');
    });
  });
});
