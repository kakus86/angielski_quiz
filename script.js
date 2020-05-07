
    (() => {
    const quiz_container = document.querySelector(".js-quiz__container");
    const button_slowka = document.querySelector(".js-button-slowka");
    const button_words = document.querySelector(".js-button-words");
    const button_przyimki = document.querySelector(".js-button-przyimki");
    const button_prepositions = document.querySelector(".js-button-prepositions");
    const button_czasowniki = document.querySelector(".js-button-czasowniki-frazowe");
    const button_phrasal = document.querySelector(".js-button-phrasal-verbs");
    
    const pytania_slowka = ["żona:", "mąż:", "matka:", "ojciec:", "córka:", "syn:", "jedynak:", "siostra:", "brat:", "rodzeństwo:", "bliźniak:", "babcia:", "prababcia:", "wnuczka:", "ciocia:", "wujek:", "bratanek, siostrzeniec:", "bratanica, siostrzenica:", "kuzyn, kuzynka:", "teściowie:", "synowa:", "szwagierka, bratowa:", "macocha:", "krewni:", "pokolenie:", "dziadek:"];
    const pytania_words = ["wife:", "husband:", "mother:", "father:", "dauther:", "son:", "only child:", "sister:", "brother:", "siblings:", "twin:", "grandmother:", "great-grandmother:", "granddaughter:", "aunt:", "uncle:", "nephew:", "niece:", "cousin:", "parents-in-law:", "daughter-in-law:", "sister-in-law:", "stepmother:", "relatives:", "generation:", "grandfather:"];
    const pytania_przyimki = ["kłócić się z:", "dobrze się z kimś dogadywać:", "mieć z kims coś wspólnego:", "mieszkać z kimś:", "wyglądać jak:", "opiekować się (kimś):", "zgadzać się z:", "pytać o:", "prosić o:", "należeć do:", "zależeć od:", "dobre/złe poczucie humoru:", "za czyimiś plecami:", "śmiać się z:", "słuchać:", "płacić za:", "myśleć o kimś/czymś"];
    const pytania_prepositions = ["to argue with:", "to get on well with:", "to have sth in common with sb:", "to live with sb:", "to look like:", "to take care of:", "to agree with:", "to ask about:", "to ask for:", "to belong to:", "to depend on:", "a good/bad sense od humour:", "behind sb's back:", "to laugh at:", "to listen to:", "to pay for:", "to think about sb/sth:"];
    const pytania_czasowniki_frazowe = ["włączać, odkręcać:", "wyłączać, zakręcać:", "ściszać, przykręcać,odrzucać(np.ofertę):", "podgłaśniać, podkręcać, pojawiać się(ktoś/coś):", "obracać się, odwracać się:", "wprowadzać się (do kogoś):", "iść do przodu, żyć dalej:", "przechodzić do (np.następnego ppunktu):", "wyprowadzać się:", "przesuwać się:"];
    const pytania_phrasal_verbs = ["to turn on:", "to turn off:", "to turn down:", "to turn up:", "to turn around:", "to move in (with sb):", "to move on:", "to move on to:", "to move out:", "to move over:"];

    const odpowiedzi_slowka = ["wife", "husband", "mother", "father", "dauther", "son", "only child", "sister", "brother", "siblings", "twin", "grandmother", "great-grandmother", "granddaughter", "aunt", "uncle", "nephew", "niece", "cousin", "parents-in-law", "daughter-in-law", "sister-in-law", "stepmother", "relatives", "generation", "grandfather"];//tablica z odpowiedziami do pytania_slowka
    const odpowiedzi_words = ["żona", "mąż", "matka", "ojciec", "córka", "syn", "jedynak", "siostra", "brat", "rodzeństwo", "bliźniak", "babcia", "prababcia", "wnuczka", "ciocia", "wujek", "bratanek, siostrzeniec", "bratanica, siostrzenica", "kuzyn, kuzynka", "teściowie", "synowa", "szwagierka, bratowa", "macocha", "krewni", "pokolenie", "dziadek"];//tablica z odpowiedziami do pytania_words
    const odpowiedzi_przyimki = ["to argue with", "to get on well with", "to have sth in common with sb", "to live with sb", "to look like", "to take care of", "to agree with", "to ask about", "to ask for", "to belong to", "to depend on", "a good/bad sense od humour", "behind sb's back", "to laugh at", "to listen to", "to pay for", "to think about sb/sth"];//tablica z odpowiedziami do pytania_przyimki
    const odpowiedzi_prepositions = ["kłócić się z", "dobrze się z kimś dogadywać", "mieć z kims coś wspólnego", "mieszkać z kimś", "wyglądać jak", "opiekować się (kimś)", "zgadzać się z", "pytać o", "prosić o", "należeć do", "zależeć od", "dobre/złe poczucie humoru", "za czyimiś plecami", "śmiać się z", "słuchać", "płacić za", "myśleć o kimś/czymś"];//tablica z odpowiedziami do pytania_prepositions
    const odpowiedzi_czasowniki_frazowe = ["to turn on", "to turn off", "to turn down", "to turn up", "to turn around", "to move in (with sb)", "to move on", "to move on to", "to move out", "to move over"];//tablica z odpowiedziami do pytania_czasowniki_frazowe
    const odpowiedzi_phrasal_verbs = ["włączać, odkręcać:", "wyłączać, zakręcać:", "ściszać, przykręcać,odrzucać(np.ofertę):", "podgłaśniać, podkręcać, pojawiać się(ktoś/coś):", "obracać się, odwracać się:", "wprowadzać się (do kogoś):", "iść do przodu, żyć dalej:", "przechodzić do (np.następnego ppunktu):", "wyprowadzać się:", "przesuwać się:"];//tablica z odpowiedziami do pytania_phrasal_verbs
    
    function shuffleArray(x) {// funkcja zmieniająca kolejność elementów tablicy
        for (let i = x.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [x[i], x[j]] = [x[j], x[i]];
        }
    };

    function pytania_wybranej_kategorii(pytania, odpowiedzi, numer_pytania, numer_opcji){
    let losowy_numer = Math.floor(Math.random()*numer_pytania.length);//losowy numer
    let numer_indeksu = numer_pytania[losowy_numer];//wyznaczona liczba oznaczająca nr indeksu elementu tabeli pytania i odpowiedzi
    let pytanie = pytania[numer_indeksu];//wylosowane pytanie
    let odpowiedz = odpowiedzi[numer_indeksu];//odpowiedź do wylosowanego pytania
    let losowy_numer2 = numer_opcji[Math.floor(Math.random()*numer_opcji.length)];//losowanie drugiego numeru
    let losowy_numer3 = numer_opcji[Math.floor(Math.random()*numer_opcji.length)];//losowanie trzeciego numeru
       //pętla do uzyskania drugiego losowego numeru innego niż odpowiedź
       while (odpowiedz==odpowiedzi[losowy_numer2]){
        losowy_numer2 = numer_opcji[Math.floor(Math.random()*numer_opcji.length)];
       };
       //pętla do uzyskania trzeciego losowego numeru innego niż odpowiedź i opcja1
       while (odpowiedzi[losowy_numer2]==odpowiedzi[losowy_numer3] || odpowiedz==odpowiedzi[losowy_numer3]){
        losowy_numer3 = numer_opcji[Math.floor(Math.random()*numer_opcji.length)];
       }
    numer_pytania.splice(losowy_numer,1);//usuwanie wylosowanego numeru z tablicy z numerami
    let opcja1 =odpowiedzi[losowy_numer2];//zmienna z opcją1
    let opcja2 =odpowiedzi[losowy_numer3];//zmienna z opcją2
    const opcje = [];//tablica z opcjami do wyświetlenia
    opcje.push(odpowiedz, opcja1, opcja2);
    shuffleArray(opcje);
    
        quiz_container.innerHTML = "<h2 class='quiz__question'>"+pytanie+"</h2><label class='quiz__option'><input class='quiz__input' type='radio' name='option' value='"+opcje[0]+"'><span>"+opcje[0]+"</span></label><label class='quiz__option'><input class='quiz__input' type='radio' name='option' value='"+opcje[1]+"'><span>"+opcje[1]+"</span></label><label class='quiz__option'><input class='quiz__input' type='radio' name='option' value='"+opcje[2]+"'><span>"+opcje[2]+"</span></label><div class='massage'></div><button class='check button'>Sprawdź</button>";
   
        
    //sprawdzamy czy wybrana opcja jest poprawna
    const sprawdz = document.querySelector(".check");
    sprawdz.addEventListener("click", function() {
        let correct = odpowiedz;
       
        let massage = document.querySelector(".massage");
       
        if(document.querySelector('input[name="option"]:checked')==null){//sprawdza czy zaznaczono jakąś odpowiedź
            massage.innerHTML = "<p class='null'>Nic nie zaznaczyłeś</p>";
        } else{   
            let answer = document.querySelector('input[type="radio"]:checked').value;
            
                if (answer == correct) {        
                    let quiz_option = document.getElementsByClassName('quiz__option');
                    let quiz_input = document.getElementsByClassName('quiz__input');
                    //pętla do oznaczenia pozostałych opcji jako nieaktywne
                    for(var j=0; j< quiz_input.length; j++){
                        if(!quiz_input[j].checked){
                            quiz_input[j].disabled = true;
                            quiz_option[j].classList.add("disabled");
                        } 
                    }
                
                    sprawdz.style.visibility="hidden";
                    massage.innerHTML = "<p class='good'>Poprawna odpowiedź</p>";
                
            
                    //funkcja do wyświetlania kolejnych pytań z tablicy
                        
                      setTimeout(function() {
                        massage.innerHTML = "";
                        if(0<numer_pytania.length){
                            pytania_wybranej_kategorii(pytania, odpowiedzi, numer_pytania, numer_opcji);
                          
                        }
                        else{
                            quiz_container.innerHTML = "<p class='koniec'>Koniec :)</p><p class='koniec'>Udało Ci się dotrwać do końca!</p>";
                            };
                    }, 1500);
                }
                else {
                    massage.innerHTML = "<p class='bad'>Źle! Spróbuj jeszcze raz</p>";
                    }
    
                } });
            };

    function start_test(pytania, odpowiedzi) {//funkcja wypisująca pytania z odpowiedniej kategorii

        const numer_pytania = [];//tablica z numerami pytania
        const numer_opcji = [];
        for (i=0; i<pytania.length; i++){//pętla do wypełnienia tablicy z numerami
            numer_pytania.push(i);
            numer_opcji.push(i);
            
        };
        pytania_wybranej_kategorii(pytania, odpowiedzi, numer_pytania, numer_opcji);

}  

    button_slowka.addEventListener("click", function() {start_test(pytania_slowka, odpowiedzi_slowka)});
    button_words.addEventListener("click", function() {start_test(pytania_words, odpowiedzi_words)});
    button_przyimki.addEventListener("click", function() {start_test(pytania_przyimki, odpowiedzi_przyimki)});
    button_prepositions.addEventListener("click", function() {start_test(pytania_prepositions, odpowiedzi_prepositions)});
    button_czasowniki.addEventListener("click", function() {start_test(pytania_czasowniki_frazowe, odpowiedzi_czasowniki_frazowe)});
    button_phrasal.addEventListener("click", function() {start_test(pytania_phrasal_verbs, odpowiedzi_phrasal_verbs)});
})();