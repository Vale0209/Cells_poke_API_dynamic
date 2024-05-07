import { css } from 'lit-element';

export default css `
  :host {
    display: block;
    text-align: center;
  }

  [slot="app__main"] {
    position: relative;
    z-index: 2; 
  }
  
  .nav-pokemon {
    margin: 0 auto;
    width: 14rem;
    display: flex;
    align-items: center;
    justify-content: space-between;    
    margin-top: 2rem;        
  }

  .nav-pokemon button {
    width: 80px;
    background-color: #00074e;
    color: #fff;
    border: none;
    cursor: pointer;
    padding: 1rem;
    border-radius: 1rem;
  }  
`;