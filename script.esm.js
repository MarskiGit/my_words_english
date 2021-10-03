'use strict';
import verbsList from './verbs.esm.js';
import nounsList from './nouns.esm.js';
import adjectivesList from './adjectives.esm.js';
import adverbsList from './adverbs.esm.js';
import prepositionsList from './prepositions.esm.js';
import loansList from './loans.esm.js';
import phrasalVerbsList from './phrasalVerb.esm.js';
import idiomList from './idiom.esm.js';

class ChangeTable {
  nav = document.querySelector('[data-nav="ul"]');
  menuLinks = document.querySelectorAll('[data-btn]');

  init() {
    this.start();
    this.eventListeners();
  }
  eventListeners() {
    this.nav.addEventListener('click', (e) => {
      if (e.target.nodeName === 'BUTTON') {
        this.handleClick(e.target);
      }
    });
    document.querySelector('[data-pl="ASC"]').addEventListener('click', view.plASC);
    document.querySelector('[data-pl="DSC"]').addEventListener('click', view.plDSC);
    document.querySelector('[data-en="ASC"]').addEventListener('click', view.enASC);
    document.querySelector('[data-en="DSC"]').addEventListener('click', view.enDSC);
    document.querySelector('[data-irr="ASC"]').addEventListener('click', view.irrASC);
    document.querySelector('[data-irr="DSC"]').addEventListener('click', view.irrDSC);
    document.querySelector('[data-en="GROUP"]').addEventListener('click', view.groupASC);
  }
  start() {
    view.details(verbsList[0][0]);
    view.render(verbsList[1]);
    document.querySelector(`[data-btn="verb"]`).classList.add('activ_btn');
  }
  handleClick = (target) => {
    let data = target.getAttribute('data-btn');
    switch (data) {
      case 'verb':
        view.details(verbsList[0][0]);
        view.render(verbsList[1]);
        break;
      case 'nouns':
        view.details(nounsList[0][0]);
        view.render(nounsList[1]);
        break;
      case 'adjectives':
        view.details(adjectivesList[0][0]);
        view.render(adjectivesList[1]);
        break;
      case 'adverbs':
        view.details(adverbsList[0][0]);
        view.render(adverbsList[1]);
        break;
      case 'prepositions':
        view.details(prepositionsList[0][0]);
        view.render(prepositionsList[1]);
        break;
      case 'loans':
        view.details(loansList[0][0]);
        view.render(loansList[1]);
        break;
      case 'phrasal':
        view.details(phrasalVerbsList[0][0]);
        view.render(phrasalVerbsList[1]);
        break;
      case 'idiom':
        view.details(idiomList[0][0]);
        view.render(idiomList[1]);
        break;
    }
    view.buttonStyle(this.menuLinks, data);
  };
}

class View {
  irregularVerb;
  searchIrregularVerb = [];
  tbody = document.getElementsByTagName('tbody')[0];
  domFragment = document.createDocumentFragment();
  detailsDiv = document.createDocumentFragment('div');
  detailsNote = document.querySelector('[data-details="note"]');
  detailsTh = document.querySelector('[data-details="th"]');

  input = document.querySelector('[data-search="input"]');
  quantity = document.querySelector('[data-search="quantity"]');
  searched = document.querySelector('[data-search="searched"]');

  lastindexTr;
  init() {
    this.eventListeners();
  }
  render(obj) {
    this.irregularVerb = obj;
    this.numberList = obj.length;
    this.quantity.innerHTML = this.numberList;
    this.plASC();
  }
  eventListeners() {
    document.querySelector('[data-search]').addEventListener('input', this.debounced(this.search, 500));
  }
  plASC = () => {
    let compare = (a, b) => (a.pl > b.pl ? 1 : b.pl > a.pl ? -1 : 0);
    this.sortArray(compare);
  };
  plDSC = () => {
    let compare = (a, b) => (a.pl < b.pl ? 1 : b.pl < a.pl ? -1 : 0);
    this.sortArray(compare);
  };
  enASC = () => {
    let compare = (a, b) => (a.en > b.en ? 1 : b.en > a.en ? -1 : 0);
    this.sortArray(compare);
  };
  enDSC = () => {
    let compare = (a, b) => (a.en < b.en ? 1 : b.en < a.en ? -1 : 0);
    this.sortArray(compare);
  };
  irrASC = () => {
    let compare = (a, b) => (a.irregular > b.irregular ? 1 : b.irregular > a.irregular ? -1 : 0);
    this.sortArray(compare);
  };
  irrDSC = () => {
    let compare = (a, b) => (a.irregular < b.irregular ? 1 : b.irregular < a.irregular ? -1 : 0);
    this.sortArray(compare);
  };
  groupASC = () => {
    let compare = (a, b) => (a.group < b.group ? 1 : b.group < a.group ? -1 : 0);
    this.sortArray(compare);
  };
  search({ target }) {
    if (this.searchIrregularVerb.length) this.searchIrregularVerb.length = 0;

    let str = target.value.trim().toLowerCase();
    this.irregularVerb.forEach((obj) => {
      if (obj.pl.includes(str) || obj.en.includes(str) || obj.note.includes(str)) {
        this.searchIrregularVerb.push(obj);
      }
    });
    this.renderTbody(this.searchIrregularVerb);
    this.searched.innerHTML = `${this.searchIrregularVerb.length === this.numberList ? '' : this.searchIrregularVerb.length}`;
  }
  sortArray(compare) {
    this.irregularVerb.sort(compare);
    this.renderTbody();
  }
  renderTbody(verb = this.irregularVerb) {
    for (const [index, obj] of verb.entries()) {
      this.domFragment.appendChild(this.renderTr(index + 1, obj));
    }

    this.addToTable();
  }
  renderTr(index, { pl, en, note }) {
    const tr = document.createElement('tr');
    tr.classList.add('hover');
    tr.innerHTML = `
                    <td>${index}</td>
                    <td>${pl.trim()}</td>
                    <td>${en.trim()}</td>
                    <td>${note.trim()}</td>
                    `;
    return tr;
  }
  addToTable() {
    this.clearTable();
    this.tbody.appendChild(this.domFragment);
  }
  clearTable() {
    this.tbody.innerHTML = '';
  }
  Ican = (irregular) => (irregular ? '<i class="far fa-check-circle"></i>' : '');
  details({ h1, table, note }) {
    document.querySelector('[data-details="h1"]').innerHTML = h1;
    document.querySelector('[data-details="note1"]').innerHTML = table.note1;
    document.querySelector('[data-details="note2"]').innerHTML = table.note2;

    if (table.note2) {
      this.detailsTh.style.display = 'block';
    } else {
      this.detailsTh.style.display = 'none';
    }

    this.renderNote(note);
  }
  renderNote(note) {
    this.detailsNote.innerHTML = '';
    for (let property in note) {
      let p = document.createElement('p');
      p.innerText = `${note[property]}`;
      this.detailsDiv.appendChild(p);
    }
    this.detailsNote.appendChild(this.detailsDiv);
  }
  debounced(f, t) {
    let l;
    return (...a) => {
      const c = this;
      clearTimeout(l), (l = setTimeout(() => f.apply(c, a), t));
    };
  }
  buttonStyle(menuLinks, data) {
    menuLinks.forEach((button) => button.classList.remove('activ_btn'));
    document.querySelector(`[data-btn="${data}"]`).classList.add('activ_btn');
    this.input.value = '';
  }
}
const view = new View();
const changeTable = new ChangeTable();

view.init();
changeTable.init();