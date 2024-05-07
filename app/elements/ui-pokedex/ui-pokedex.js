import { html } from 'lit-element';
import { CellsPage } from '@cells/cells-page';
import '@cells-components/cells-template-paper-drawer-panel';

import css from './ui-pokedex-styles';

import '../ui-pokemon-card/ui-pokemon-card';

export class UiPokedex extends CellsPage {
  static styles = [ css ];

  static get properties() {
    return {      
      pokemons: { type: Array },
    };
  }

  render() {
    return html `
      <h1>Pokedex</h1>
      <nav class="nav-pokemon">
        <button @click="${this._handlePrevPage}">Preview</button>
        <button @click="${this._handleNextPage}">Next</button>
      </nav>
      ${this.pokemons?.length === 0
        ? html` <strong>Cargando...</strong> `
        : ""
      }      
      ${ this.pokemons?.map(pokemon => html `
        <ui-pokemon-card
          id="pokemon-card"
          pokemon="${ JSON.stringify(pokemon) }"
        >
        </ui-pokemon-card>
      `) }
    `;
  }

  //Con lo anterior obtenemos las opciones de buscar más pokemones//

  async _handlePrevPage() {
    await this._handleLoadPokemons("previous");
  }

  async _handleNextPage() {
    await this._handleLoadPokemons("next");
  }

  async _handleLoadPokemons(key = "") {
    const pokemonCard = this.shadowRoot.querySelector('#pokemon-card');
    this.pokemons = [];
    pokemonCard.index = 0;
    this.dispatchEvent(new CustomEvent(`${key}-page`, { bubbles: true, composed: true }));
  }
  
}
customElements.define('ui-pokedex', UiPokedex);
