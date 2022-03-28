'use strict';
import regularVerbsList from './regularVerbs.esm.js';
import irregularVerbsList from './irregularVerbs.esm.js';
import nounsList from './nouns.esm.js';
import adjectivesList from './adjectives.esm.js';
import adverbsList from './adverbs.esm.js';
import prepositionsList from './prepositions.esm.js';
import loansList from './loans.esm.js';
import phrasalVerbsList from './phrasalVerb.esm.js';
import idiomList from './idiom.esm.js';
import numberList from './numbers.esm.js';
import conjunctionList from './conjunction.esm.js';

const tbody = document.getElementsByTagName('tbody')[0],
    nav = document.querySelector('[data-nav="ul"]'),
    menuLinks = document.querySelectorAll('[data-btn]'),
    detailsNote = document.querySelector('[data-details="note"]'),
    detailsTh = document.querySelector('[data-details="th"]'),
    input = document.querySelector('[data-search="input"]'),
    quantity = document.querySelector('[data-search="quantity"]'),
    searched = document.querySelector('[data-search="searched"]'),
    resultScore = document.querySelector('[data-result="score"]'),
    resultCount = document.querySelector('[data-result="count"]'),
    resultCorrect = document.querySelector('[data-result="correct"]'),
    resultIncorrect = document.querySelector('[data-result="incorrect"]'),
    resultPercent = document.querySelector('[data-result="percent"]'),
    resultEmpty = document.querySelector('[data-result="empty"]');

class View {
    tbodyObj;
    searchWords = [];
    domFragment = document.createDocumentFragment();
    detailsDiv = document.createDocumentFragment('div');
    lastindexTr;
    responseCorrectVerbs = {};
    responseIncorrectVerbs = {};
    testChar;

    learning = false;
    verb;
    answer;
    id = 1;
    OK = 0;
    NOOK = 0;
    procent = 0;
    init() {
        input.focus();
        this.eventListeners();
    }
    startRender(obj) {
        this.tbodyObj = obj;
        this.numberList = obj.length;
        quantity.innerHTML = this.numberList;
        this.plASC();
    }
    eventListeners() {
        document.querySelector('[data-search="clear"]').addEventListener('click', this.clear);
        input.addEventListener('input', this.debounced(this.search, 500));
    }
    clear = () => {
        const event = { target: { value: '' } };
        input.value = '';
        input.focus();
        this.search(event);
    };

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
        let compare = (a, b) => (a.group > b.group ? 1 : b.group > a.group ? -1 : 0);
        this.sortArray(compare);
    };

    irrDSC = () => {
        let compare = (a, b) => (a.group < b.group ? 1 : b.group < a.group ? -1 : 0);
        this.sortArray(compare);
    };
    sortArray(compare) {
        this.tbodyObj.sort(compare);
        this.renderTbody();
    }
    renderTbody(verb = this.tbodyObj) {
        if (!this.learning) {
            for (const row of verb) this.domFragment.appendChild(this.renderTr(row));
        } else {
            this.id = 1;
            for (const row of verb) this.domFragment.appendChild(this.renderTrInput(row));
            tbody.addEventListener('input', this.debounced(this.check, 500));
            resultCount.innerHTML = Object.keys(verb).length * 3;
        }

        this.addToTable();
    }
    renderTr({ pl, en, note }) {
        let tr = document.createElement('tr');
        tr.classList.add('hover');
        tr.innerHTML = `
                    <td>${pl.toString().trim()}</td>
                    <td>${en.trim()}</td>
                    <td>${note.trim()}</td>
                    `;
        return tr;
    }
    renderTrInput({ pl, en, note }) {
        this.verb = note.split(' / ');
        let tr = document.createElement('tr');
        tr.classList.add('hover');
        tr.innerHTML = `  
                <td>${pl.trim()}</td>
                <td style="padding: 0;"> <input class="input_earning" type="text" data-correct="${en.trim()}"  data-id="${this.id++}"> </td>
                <td style="padding: 0;"> <input class="input_earning" type="text" data-correct="${this.verb[0].trim()}" data-id="${this.id++}"> </td>
                <td style="padding: 0;"> <input class="input_earning" type="text" data-correct="${this.verb[1].trim()}" data-id="${this.id++}"> </td>
                `;
        return tr;
    }
    addToTable() {
        this.clearTable();
        tbody.appendChild(this.domFragment);
    }
    clearTable() {
        tbody.innerHTML = '';

        if (this.learning) {
            this.id = 1;
            this.OK = 0;
            this.NOOK = 0;
            this.procent = 0;
            this.responseCorrectVerbs = {};
            this.responseIncorrectVerbs = {};
            resultCorrect.innerHTML = '';
            resultIncorrect.innerHTML = '';
            resultPercent.innerHTML = '';
            resultEmpty.innerHTML = '';
            document.querySelector('.fa-trophy').style.color = 'black';
        }
    }
    details({ h1, table, note }) {
        if (!this.learning) {
            document.querySelector('[data-details="h1"]').innerHTML = h1;
            document.querySelector('[data-details="note1"]').innerHTML = table.note1;
            document.querySelector('[data-details="note2"]').innerHTML = !table.note3 ? table.note2 : `${table.note2} / ${table.note3}`;
            document.querySelector('[data-details="note3"]').innerHTML = '';
        } else {
            document.querySelector('[data-details="h1"]').innerHTML = `${h1} - nauka`;
            document.querySelector('[data-details="note1"]').innerHTML = table.note1;
            document.querySelector('[data-details="note2"]').innerHTML = table.note2;
            document.querySelector('[data-details="note3"]').innerHTML = table.note3;
        }

        if (table.note2 || table.note3) {
            detailsTh.style.display = 'block';
        } else {
            detailsTh.style.display = 'none';
        }

        this.renderNote(note);
    }
    renderNote(note) {
        detailsNote.innerHTML = '';
        for (let property in note) {
            let p = document.createElement('p');
            p.innerText = `${note[property]}`;
            this.detailsDiv.appendChild(p);
        }
        detailsNote.appendChild(this.detailsDiv);
    }
    check = ({ target }) => {
        this.answer = target.value.toLowerCase().trim();
        this.testChar = /^[a-zA-Z\s]*$/.test(this.answer);

        if (this.answer === target.dataset.correct.trim() && this.answer !== '' && this.testChar) {
            target.classList.remove('incorrect');
            target.classList.add('correct');

            this.responseCorrectVerbs[target.dataset.id] = target.dataset.correct;
            delete this.responseIncorrectVerbs[target.dataset.id];
        } else if (this.answer !== '') {
            target.classList.remove('correct');
            target.classList.add('incorrect');

            this.responseIncorrectVerbs[target.dataset.id] = target.dataset.correct;
            delete this.responseCorrectVerbs[target.dataset.id];
        }

        this.OK = Object.keys(this.responseCorrectVerbs).length;
        this.NOOK = Object.keys(this.responseIncorrectVerbs).length;
        this.procent = Number(((this.OK / (this.numberList * 3)) * 100).toFixed(2));

        this.displayStatistics();
        this.colorCup();
    };
    search({ target }) {
        if (this.searchWords.length) this.searchWords.length = 0;

        let str = target.value.trim().toLowerCase();

        this.tbodyObj.forEach((obj) => {
            if (obj.pl.toLowerCase().includes(str) || obj.en.toLowerCase().includes(str) || obj.note.toLowerCase().includes(str)) {
                this.searchWords.push(obj);
            }
        });
        this.renderTbody(this.searchWords);
        searched.innerHTML = `${this.searchWords.length === this.numberList ? '' : this.searchWords.length}`;
        this.numberList = this.searchWords.length;
    }
    displayStatistics() {
        resultCorrect.innerHTML = this.OK;
        resultIncorrect.innerHTML = this.NOOK;
        resultPercent.innerHTML = this.procent;
        resultEmpty.innerHTML = this.numberList * 3 - this.OK - this.NOOK;
    }
    colorCup() {
        if (this.procent >= 50 && this.procent <= 65) {
            document.querySelector('.fa-trophy').style.color = 'brown';
        } else if (this.procent >= 66 && this.procent <= 80) {
            document.querySelector('.fa-trophy').style.color = 'silver';
        } else if (this.procent >= 81 && this.procent <= 100) {
            document.querySelector('.fa-trophy').style.color = 'gold';
        }
    }
    buttonStyle(data) {
        menuLinks.forEach((button) => button.classList.remove('activ_btn'));
        document.querySelector(`[data-btn="${data}"]`).classList.add('activ_btn');
        input.value = '';
        searched.innerHTML = '';
    }
    debounced(f, t) {
        let l;
        return (...a) => {
            const c = this;
            clearTimeout(l), (l = setTimeout(() => f.apply(c, a), t));
        };
    }
}

class ChangeTable {
    init() {
        this.start();
        this.eventListeners();
    }
    eventListeners() {
        nav.addEventListener('click', ({ target }) => {
            if (target.nodeName === 'BUTTON') {
                this.handleClick(target);
            }
        });
        document.querySelector('[data-pl="ASC"]').addEventListener('click', view.plASC);
        document.querySelector('[data-pl="DSC"]').addEventListener('click', view.plDSC);
        document.querySelector('[data-en="ASC"]').addEventListener('click', view.enASC);
        document.querySelector('[data-en="DSC"]').addEventListener('click', view.enDSC);
        document.querySelector('[data-irr="ASC"]').addEventListener('click', view.irrASC);
        document.querySelector('[data-irr="DSC"]').addEventListener('click', view.irrDSC);
    }
    start() {
        view.details(regularVerbsList[0][0]);
        view.startRender(regularVerbsList[1]);
        document.querySelector(`[data-btn="regularVerbs"]`).classList.add('activ_btn');
    }
    handleClick = (target) => {
        let data = target.getAttribute('data-btn');
        view.learning = false;
        switch (data) {
            case 'regularVerbs':
                view.details(regularVerbsList[0][0]);
                view.startRender(regularVerbsList[1]);
                break;
            case 'irregularVerbs':
                view.details(irregularVerbsList[0][0]);
                view.startRender(irregularVerbsList[1]);
                break;
            case 'nouns':
                view.details(nounsList[0][0]);
                view.startRender(nounsList[1]);
                break;
            case 'adjectives':
                view.details(adjectivesList[0][0]);
                view.startRender(adjectivesList[1]);
                break;
            case 'adverbs':
                view.details(adverbsList[0][0]);
                view.startRender(adverbsList[1]);
                break;
            case 'prepositions':
                view.details(prepositionsList[0][0]);
                view.startRender(prepositionsList[1]);
                break;
            case 'loans':
                view.details(loansList[0][0]);
                view.startRender(loansList[1]);
                break;
            case 'phrasal':
                view.details(phrasalVerbsList[0][0]);
                view.startRender(phrasalVerbsList[1]);
                break;
            case 'idiom':
                view.details(idiomList[0][0]);
                view.startRender(idiomList[1]);
                break;
            case 'number':
                view.details(numberList[0][0]);
                view.startRender(numberList[1]);
                break;
            case 'conjunction':
                view.details(conjunctionList[0][0]);
                view.startRender(conjunctionList[1]);
                break;
            case 'learning':
                view.learning = true;
                resultScore.style.display = 'flex';

                view.details(irregularVerbsList[0][0]);
                view.startRender(irregularVerbsList[1]);
                break;
        }
        if (!view.learning) {
            document.querySelector('[data-search]').focus();
            resultScore.style.display = 'none';
        }

        view.buttonStyle(data);
    };
}

const view = new View();
const changeTable = new ChangeTable();

view.init();
changeTable.init();
