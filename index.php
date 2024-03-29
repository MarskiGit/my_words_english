<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Moje słówka | Marski.pl</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.12/css/all.css" integrity="sha384-G0fIWCsCzJIMAVNQPfjH08cyYaUtMwjJwqiRKxxE/rx96Uroj1BtIQ6MLJuheaO9" crossorigin="anonymous" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;0,500;0,700;1,100;1,400;1,500;1,700&display=swap" rel="stylesheet" />
    <link rel="shortcut icon" href="marski_logo.png" type="image/x-icon" sizes="16x16" />
    <link rel="stylesheet" href="style.css" />
    <script type="module" src="./script.esm.js"></script>
</head>

<body>
    <nav>
        <ul data-nav="ul">
            <li><button class="btn_nav" data-btn="regularVerbs">Czas. Reguralne</button></li>
            <li><button class="btn_nav" data-btn="irregularVerbs">Czas. Nieregularne</button></li>
            <li><button class="btn_nav" data-btn="phrasal">Czas. Frazalne</button></li>
            <li><button class="btn_nav" data-btn="nouns">Rzeczowniki</button></li>
            <li><button class="btn_nav" data-btn="adjectives">Przymiotniki</button></li>
            <li><button class="btn_nav" data-btn="adverbs">Przysłówki</button></li>
            <li><button class="btn_nav" data-btn="prepositions">Przyimki</button></li>
            <li><button class="btn_nav" data-btn="loans">Zaimki</button></li>
            <li><button class="btn_nav" data-btn="idiom">Idiomy</button></li>
            <li><button class="btn_nav" data-btn="number">Liczby</button></li>
            <li><button class="btn_nav" data-btn="conjunction">Spójnik</button></li>
            <li><button class="btn_nav" data-btn="learning">Nauka</button></li>
        </ul>
    </nav>
    <main>
        <section>
            <h1 class="h1" data-details="h1"></h1>
        </section>
        <section class="details_note" data-details="note"></section>
        <section>
            <label for="search">Szukaj:</label>
            <input type="search" name="search" data-search="input" autofocus="autofocus" required /><span data-search="clear" class="clear"></span>

            <div class="number_words">
                <p>Liczba słówek: <span data-search="quantity"></span></p>
                <p>Wyszukano: <span data-search="searched"></span></p>
            </div>
        </section>
        <table>
            <thead>
                <tr class="sorting">
                    <th>
                        <button type="button" data-pl="ASC"><i class="far fa-caret-square-up"></i></button>
                        <button type="button" data-pl="DSC"><i class="far fa-caret-square-down"></i></button>
                    </th>
                    <th>
                        <button type="button" data-en="ASC"><i class="far fa-caret-square-up"></i></button>
                        <button type="button" data-en="DSC"><i class="far fa-caret-square-down"></i></button>
                    </th>
                    <th data-details="th">
                        <button type="button" data-irr="ASC"></button>
                        <button type="button" data-irr="DSC"></button>
                    </th>
                </tr>
                <tr>
                    <th>Polski</th>
                    <th data-details="note1"></th>
                    <th data-details="note2"></th>
                    <th data-details="note3"></th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    </main>
    <section>
        <p>Rekruter pyta kandydata: "Dlaczego oczekuje pan tak wysokiej pensji, skoro nie ma pan doświadczenia w tej dziedzinie?"</p>

        <p>odpowiada: "Cóż, praca jest o wiele trudniejsza, gdy nie wiesz, co masz robić."</p>
    </section>
    <footer>
        <div class="author">
            <span>&#xA9; [ Ten rok ] <a href="https://marski.pl/" target="_blank"> marski.pl</a> </span>
        </div>
    </footer>

    <aside class="score" data-result="score">
        <p>
            <span> <i class="fas fa-trophy"></i> </span>
        </p>
        <p>
            <span> <i class="fas fa-thumbs-up"></i> </span>
            <span data-result="correct"> </span>
        </p>
        <p>
            <span> <i class="fas fa-thumbs-down"></i> </span>
            <span data-result="incorrect"> </span>
        </p>
        <p>
            <span> <i class="fas fa-percent"></i> </span>
            <span data-result="percent"> </span>
        </p>
        <p>
            <span> <i class="far fa-window-restore"></i> </span>
            <span data-result="count"></span>
        </p>
        <p>
            <span> <i class="fas fa-battery-empty"></i> </span>
            <span data-result="empty"></span>
        </p>




    </aside>
</body>

</html>