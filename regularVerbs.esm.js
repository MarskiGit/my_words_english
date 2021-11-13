'use strict';
const regularVerbsList = [
    [
        {
            h1: 'CZASOWNIKI Regularne',
            table: {
                note1: 'present participle',
                note2: 'past participle',
            },
            note: {},
        },
    ],
    [
        { group: 1, pl: 'stać się / zostać / zostawać (kimś)', en: 'become', note: 'become<u>d</u>' },
        { group: 1, pl: 'odpowiadać', en: 'answer', note: 'answer<u>ed</u>' },
        { group: 1, pl: 'powinien / powinno się', en: 'should', note: 'should<u>ed</u>' },
        { group: 1, pl: 'patrzeć', en: 'look', note: 'look<u>ed</u>' },
        { group: 1, pl: 'ufać / wierzyć', en: 'trust', note: 'trust<u>ed</u>' },
        { group: 1, pl: 'pracować / działać', en: 'work', note: 'work<u>ed</u>' },
        { group: 1, pl: 'dzwonić / nazywać', en: 'call', note: 'call<u>ed</u>' },
        { group: 1, pl: 'próbować / starać się', en: 'try', note: 'tr<u>ied</u>' },
        { group: 1, pl: 'potrzebować', en: 'need', note: 'need<u>ed</u>' },
        { group: 1, pl: 'preferować / woleć', en: 'prefer', note: 'prefer<u>ed</u>' },
        { group: 1, pl: 'zezwalać na / pozwalać', en: 'allow', note: 'allow<u>ed</u>' },
        { group: 1, pl: 'wydawać się', en: 'seem', note: 'seem<u>ed</u>' },
        { group: 1, pl: 'pomagać / wspierać', en: 'help', note: 'help<u>ed</u>' },
        { group: 1, pl: 'grać / odtwarzać / bawić się', en: 'play', note: 'pla<u>ied</u>' },
        { group: 1, pl: 'mieszkać / żyć', en: 'live', note: 'liv<u>ed</u>' },
        { group: 1, pl: 'ruszać (się) / przenosić (się)', en: 'move', note: 'move<u>d</u>' },
        { group: 1, pl: 'rozmawiać', en: 'talk', note: 'talk<u>ed</u> ' },
        { group: 1, pl: 'chcieć', en: 'want', note: 'want<u>ed</u> ' },
        { group: 1, pl: 'uruchamiać / wystrzelić / odpalić', en: 'launch', note: 'launch<u>ed</u>' },
        { group: 1, pl: 'zaproszać', en: 'invite', note: 'invit<u>ed</u>' },
        { group: 1, pl: 'kwitnąć', en: 'blossom', note: 'blossom<u>ed</u>' },
        { group: 1, pl: 'dostarczyć', en: 'deliver', note: 'deliver<u>ed</u>' },
        { group: 1, pl: 'przerywać / przeszkadzać', en: 'interrupt', note: 'interrupt<u>ed</u>' },
        { group: 1, pl: 'dwracać się / skręcać / obracać', en: 'turn', note: 'turn<u>ed</u>' },
        { group: 1, pl: 'zamierzać', en: 'going to', note: 'gonna' },
        { group: 1, pl: 'musieć', en: 'have to', note: 'gotta' },
        { group: 1, pl: 'nienawidzić', en: 'hate', note: 'hate<u>d</u>' },
        { group: 1, pl: 'podziwiać / szanować', en: 'admire', note: 'admire<u>d</u>' },
        { group: 1, pl: 'poprawić (się) / ulepszyć', en: 'improve', note: ' improve<u>d</u>' },
        { group: 1, pl: 'przybywać / przyjechać / przylatywać', en: 'arrive', note: 'arrive<u>d</u>' },
        { group: 1, pl: 'przypuszczać / zakładać', en: 'assume', note: 'assume<u>d</u>' },
        { group: 1, pl: 'mieć swoje miejsce / prznależeć / należeć', en: 'belong', note: 'belong<u>ed</u>' },
        { group: 1, pl: 'doceniać / rozumieć', en: 'appreciate', note: 'appreciate<u>d</u>' },
        { group: 1, pl: 'zgadzać się / podzielać opinię', en: 'agree', note: 'agree<u>d</u>' },
        { group: 1, pl: 'zależeć (być uzależnionym)', en: 'depend', note: 'depende<u>d</u>' },
        { group: 1, pl: 'martwić się', en: 'worry', note: 'worr<u>ied</u>' },
        { group: 1, pl: 'dotyczyć / niepokoić', en: 'concern', note: 'concerne<u>d</u>' },
        { group: 1, pl: 'boleć', en: 'ache', note: 'ache<u>d</u>' },
        { group: 1, pl: 'nosić / dźwigać', en: 'carry', note: 'carr<u>ied</u>' },
        { group: 1, pl: 'uwielbiać', en: 'adore', note: 'adore<u>d</u>' },
        { group: 1, pl: 'przekroczyć (limit) / przewyższyć', en: 'exceed', note: 'exceed<u>ed</u>' },
        { group: 1, pl: 'lubić', en: 'like', note: 'like<u>d</u>' },
        { group: 1, pl: 'aprobować / zatwierdzać / akceptować', en: 'approve', note: 'approve<u>d</u>' },
        { group: 1, pl: 'słuchać', en: 'listen', note: 'listen<u>ed</u>' },
        { group: 1, pl: 'dodawać', en: 'add', note: 'add<u>ed</u>' },
        { group: 1, pl: 'lubić / czerpać przyjemnosć', en: 'enjoy', note: 'enjoy<u>ed</u>' },
        { group: 1, pl: 'roztapiać / topić', en: 'melt', note: 'melt<u>ed</u>' },
        { group: 1, pl: 'pożyczać (coś od kogoś)', en: 'borrow', note: 'borrow<u>ed</u>' },
        { group: 1, pl: 'chronić / zabezpieczyć / nronić', en: 'protect', note: 'protect<u>ed</u>' },
        { group: 1, pl: 'chichotać', en: 'giggle', note: 'giggle<u>d</u>' },
        { group: 1, pl: 'mieć na coś pieniądze', en: 'afford', note: 'afford<u>ed</u>' },
        { group: 1, pl: 'śmiać się', en: 'laugh', note: 'laugh<u>ed</u>' },
        { group: 1, pl: 'aktualizować', en: 'update', note: 'update<u>d</u>' },
        { group: 1, pl: 'unosić się', en: 'float', note: 'float<u>ed</u>' },
        { group: 1, pl: 'nie zgadzać się', en: 'disagree', note: 'disagre<u>d</u>' },
        { group: 1, pl: 'spacerować / chodzić', en: 'walk', note: 'walk<u>ed</u>' },
        { group: 1, pl: 'spać', en: 'sleep', note: 'slept' },
        { group: 1, pl: 'płakać', en: 'cry', note: 'cr<u>ied</u>' },
        { group: 1, pl: 'odkurzać', en: 'vacuum', note: '' },
        { group: 1, pl: 'pamiętać', en: 'remember', note: 'remember<u>ed</u>' },
        { group: 1, pl: 'prasować', en: 'iron', note: 'iron<u>ed</u>' },
        { group: 1, pl: 'zarabiać (pieniądze)', en: 'earn', note: 'earn<u>ed</u>' },
        { group: 1, pl: 'wejść', en: 'enter', note: 'enter<u>ed</u>' },
        { group: 1, pl: 'zamykać', en: 'lock', note: 'lock<u>ed</u>' },
        { group: 1, pl: 'wynaleźć', en: 'invent', note: 'invent<u>ed</u>' },
        { group: 1, pl: 'wydarzyć się / zdarzyć', en: 'happen', note: 'happen<u>ed</u>' },
        { group: 1, pl: 'przygotowywać', en: 'prepare', note: 'prepare<u>ed</u>' },
        { group: 1, pl: 'zauważyć', en: 'notice', note: 'notice<u>d</u>' },
        { group: 1, pl: 'integrować / wprowadzać', en: 'integrate', note: 'integrate<u>d</u>' },
        { group: 1, pl: 'doszkalać / podniesć kwalifikacje', en: 'upskill', note: 'upskill<u>ed</u>' },
        { group: 1, pl: 'przystosowywać się / dostosowywać się', en: 'adapt', note: 'adapt<u>ed</u>' },
        { group: 1, pl: 'osądzać / sądzić', en: 'judge', note: 'judg<u>ed</u>' },
        { group: 1, pl: 'zamawiać', en: 'order', note: 'order<u>ed</u>' },
        { group: 1, pl: 'popełniać / dopuszczać się', en: 'commit', note: 'commit<u>ed</u>' },
        { group: 1, pl: 'zrywać / zbierać', en: 'pick', note: 'pick<u>ed</u>' },
        { group: 1, pl: 'eksponować / odsłaniać', en: 'expose', note: 'expos<u>ed</u>' },
        { group: 1, pl: 'zrywać', en: 'pick', note: 'pick<u>ed</u>' },
        { group: 1, pl: 'zgadywać / domyślać się', en: 'guess', note: 'guess<u>ed</u>' },
        { group: 1, pl: 'przypuszczać', en: 'suppose', note: 'suppos<u>ed</u>' },
        { group: 1, pl: 'oczekiwać / spodziwać się / spodziewać się', en: 'expect', note: 'expect<u>ed</u>' },
        { group: 1, pl: 'wierzyć / uwierzyć', en: 'believe', note: 'believe<u>ed</u>' },
        { group: 1, pl: 'robić porządki / sprzątać', en: 'tidy up', note: '?' },
        { group: 1, pl: 'podróżować', en: 'travel', note: 'travel<u>ed</u>' },
        { group: 1, pl: 'przeprowadzać się / przenieść / ruszaj się', en: 'move', note: 'mov<u>ed</u>' },
        { group: 1, pl: 'studiować', en: 'study', note: 'study<u>ed</u>' },
        { group: 1, pl: 'włączać / wliczać / zawierać', en: 'include', note: 'includ<u>ed</u>' },
        { group: 1, pl: 'zawachać się / wahać się', en: 'hesitate', note: 'hesitat<u>ed</u>' },
        { group: 1, pl: 'przedstawić / zapoznawać', en: 'introduce', note: 'introduc<u>ed</u>' },
        { group: 1, pl: 'przesunąć', en: 'swipe', note: 'swip<u>ed</u>' },
        { group: 1, pl: 'dezaktywować / wyłączyć', en: 'deactivate', note: 'deactivat<u>ed</u>' },
        { group: 1, pl: 'wyglądać', en: 'look', note: 'look<u>ed</u>' },
        { group: 1, pl: 'rzuć monetą', en: 'toss a coin', note: '' },
        { group: 1, pl: 'zawinąć / owinąć / zapakować', en: 'wrap', note: 'wrap<u>ed</u>' },
        { group: 1, pl: 'porównywać', en: 'compare', note: 'compar<u>ed</u>' },
        { group: 1, pl: 'kopać', en: 'dig', note: 'dig<u>ed</u>' },
        { group: 1, pl: 'chwiać się / chybotać się / kiwać się', en: 'wobble', note: 'wobbl<u>ed</u>' },
        { group: 1, pl: 'ziewać', en: 'yawn', note: 'yawn<u>ed</u>' },
        { group: 1, pl: 'zaspać', en: 'oversleep', note: 'oversleep<u>ed</u>' },
        { group: 1, pl: 'żeglować', en: 'sail', note: 'sail<u>ed</u>' },
        { group: 1, pl: 'twierdzić / utzymywać', en: 'claim', note: 'claim<u>ed</u>' },
        { group: 1, pl: 'kierwoać zarządzac', en: 'manage', note: 'manag<u>ed</u>' },
        { group: 1, pl: 'przycinać / podcinać', en: 'trim', note: 'trim<u>ed</u>' },
        { group: 1, pl: 'wyrzucać / pozbywać się', en: 'discard', note: 'discard<u>ed</u>' },
        { group: 1, pl: 'kierować / zarządzać', en: 'manage', note: 'manag<u>ed</u>' },
        { group: 1, pl: 'wydawać (pieniądze)', en: 'spend', note: 'spend<u>ed</u>' },
        { group: 1, pl: 'postanawiać / zdecydować', en: 'decide', note: 'decide<u>ed</u>' },
        { group: 1, pl: 'rekomendować / polecać', en: 'recommend', note: 'recommend<u>ed</u>' },
        { group: 1, pl: 'wchodzić', en: 'enter', note: 'enter<u>ed</u>' },
        { group: 1, pl: 'relaksować się / odprężać się / rozluźniać', en: 'relax', note: 'relax<u>ed</u>' },
        { group: 1, pl: 'jeździć na łyrzwach', en: 'skate', note: 'skate<u>d</u>' },
        { group: 1, pl: 'drzemać / zdrzemnąć się', en: 'nap', note: 'nap<u>ed</u>' },
        { group: 1, pl: 'umżeć', en: 'die', note: 'die<u>d</u>' },
        { group: 1, pl: 'krzyczeć', en: 'shout', note: 'shout<u>ed</u>' },
        { group: 1, pl: 'zbliżać się / podchodzić', en: 'approach', note: 'approach<u>ed</u>' },
        { group: 1, pl: 'gwarantować', en: 'guarantee', note: 'guarante<u>ed</u>' },
        { group: 1, pl: 'tłumaczyć / objaśniać', en: 'explain', note: 'explain<u>ed</u>' },
        { group: 1, pl: 'chybiać / nie trafiać / mijać', en: 'miss', note: 'miss<u>ed</u>' },
        { group: 1, pl: 'uczyć się (zdobywać nową wiedzę)', en: 'learn', note: 'learn<u>ed</u>' },
        { group: 1, pl: 'uczyć się (np. do testu)', en: 'study', note: 'study<u>ied</u>' },
    ],
];

// Czasowniki Reguralne
export default regularVerbsList;
