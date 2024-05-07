module.exports = CONFIG => {
  const page = {
    template: {
      tag: "cells-template-paper-drawer-panel",
      familyPath: "@cells-components/cells-template-paper-drawer-panel",
      render: "litElement",
      properties: {
        zones: [
          "app__transactional",
          "app__main"
        ]
      }
    },
    components: [
      {
        zone: "app__transactional",
        type: "DM",
        familyPath: "../elements/bgadp-pokeapi-dm",
        tag: "bgadp-pokeapi-dm",
        render: "litElement",
        properties: {
          cellsConnections: {
            in: {
              "change-next-page": {
                bind: 'handleNextPage'
              },
              "change-prev-page": {
                bind: 'handlePrevPage'
              }
            },
            out: {
              "get-pokemons-data": {
                bind: 'get-pokemons'
              }
            }
          }
        }
      },
      {
        zone: "app__main",
        type: "UI",
        familyPath: "../elements/ui-pokedex",
        tag: "ui-pokedex",
        render: "litElement",
        properties: {
          cellsConnections: {
            in: {
              "get-pokemons-data": {
                bind: 'pokemons'
              }              
            },
            out: {
              "change-next-page": {
                bind: 'next-page'
              },
              "change-prev-page": {
                bind: 'previous-page'
              },
              "open-modal-error": {
                bind: 'modal-error'
              }
            }
          }
        }
      },
      {
        zone: "app__main",
        type: "UI",
        familyPath: "../elements/ui-modal-error",
        tag: "ui-modal-error",
        render: "litElement",
        properties: {
          cellsConnections: {
            in: {
              "open-modal-error": {
                bind: '_handleOpenModal'
              }
            },
            out: {}
          }
        }
      }
    ]
  };

  return page;
};