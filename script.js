
    var quiz_container = document.querySelector(".js-quiz__container");
    var btn = document.querySelector(".quiz__button");
    var quiz_questions = document.createElement("DIV");
    quiz_questions.classList.add("quiz__questions");
    quiz_container.appendChild(quiz_questions); //dodaje diva do dokumentu
    var pytanie = document.querySelector("quiz__questions");
    var pytania = [
        ["Pas obiektów skalno-lodowych za orbitą Neptuna to:", "Mały Obłok Magellana", "Pas Kuipera", "Galaktyka Andromedy", "Pas Kuipera"],
        ["Naturalny satelita Wenus to:", "Io", "Europa", "Wenus nie posiada księżyca", "Wenus nie posiada księżyca"],
        ["Nasz Układ Słoneczny znajduje się w galaktyce:", "Galaktyka Trójkąta", "Wielki Obłok Magellana", "Droga Mleczna", "Droga Mleczna"],
        ["Planetą gazową nie jest:", "Uran", "Wenus", "Neptun", "Wenus" ],
        ["Pluton jest:", "Kometą", "Asteroidą", "Planetą karłowatą", "Planetą karłowatą"],
        ["Pierwszą planetą układu słonecznego jest:", "Mars", "Uran", "Merkury", "Merkury"],
        ["Deimos to naturalny satelita:", "Jowisza", "Ziemii", "Marsa", "Marsa"],
        ["Która planeta nie obraca się w sposób wsteczny:", "Mars", "Wenus", "Uran", "Mars"],
        ["Jowisz to:", "Gazowy olbrzym", "Planeta karłowata", "Planeta gwiezdna", "Gazowy olbrzym"],
        ["Która planeta ma najwięcej naturalnych satelitów:", "Jowisz", "Ziemia", "Saturn", "Saturn"],
        ["Wenus to planeta:", "Gazowa", "Skalista", "Pyłowa", "Skalista"],
        ["Która planeta okrąża Słońce co 30 lat:", "Mars", "Saturn", "Neptun", "Saturn"],
        ["W naszym Układzie Słonecznym znajduje się:", "10 planet", "9 planet", "8 planet", "8 planet"],
    ];//pytanie; odpowiedz;odpowiedz;odpowiedz;poprawna odpowiedz
    
    function wyswietl_pytanie(i) {
        
        quiz_questions.innerHTML = "<h3 class='quiz__question'>"+(i+1)+"/"+pytania.length+" "+pytania[i][0]+"</h3><label class='quiz__item'><input class='option'type='radio' name='astro' value='"+pytania[i][1]+"'>"+pytania[i][1]+"<span class='checkmark'></span></label><label class='quiz__item'><input class='option' type='radio' name='astro' value='"+pytania[i][2]+"'>"+pytania[i][2]+"<span class='checkmark'></span></label><label  class='quiz__item'><input class='option' type='radio' name='astro' value='"+pytania[i][3]+"'>"+pytania[i][3]+"<span class='checkmark'></span></label><div class='massage'></div><button class='check button'>Sprawdź</button>";
        var massage = document.querySelector(".massage");

        quiz_questions.offsetHeight;
        quiz_questions.classList.add("pojawianie");
      //  quiz_questions.classList.toggle("poj");

//sprawdzamy czy wybrana opcja jest poprawna
        var sprawdz = document.querySelector(".check");
        sprawdz.addEventListener("click", function() {
            var correct = pytania[i][4];
            
            if(document.querySelector('input[name="astro"]:checked')==null){//sprawdza czy zaznaczono jakąs odpowiedź
                massage.innerHTML = "<p class='null'>Nic nie zaznaczyłeś</p>";
            }else{
                var answer = document.querySelector('input[name="astro"]:checked').value;
                    if (answer == correct) {                        
                        var options = document.getElementsByClassName('option');
                        var quiz_item = document.getElementsByClassName('quiz__item');
                        //pętla do oznaczenia pozostałych opcji jako nieaktywne
                        for(var j=0; j< options.length; j++){
                            if(!options[j].checked){
                                options[j].disabled = true;
                                quiz_item[j].classList.add("disabled");
                            } 
                        }
                        sprawdz.style.visibility="hidden";
                        massage.innerHTML = "<p class='good'>Poprawna odpowiedź</p>";
                        //funkcja do wyświetlania kolejnych pytań z tablicy
                            
                            setTimeout(function kolejne_pytanie(){
                            massage.innerHTML = "";
                            
                            if(i+1<pytania.length){
                                quiz_questions.offsetHeight;
                                quiz_questions.classList.remove("pojawianie");
                                quiz_questions.style.animationDelay="0s"
                                wyswietl_pytanie(i+1);
                              
                            }
                            else{
                                quiz_questions.innerHTML = "<p class='koniec'>Koniec :)</p><button class='again button'>Jeszcze raz?</button>";
                                var again = document.querySelector(".again");
                                again.addEventListener("click", function () {    
                                    wyswietl_pytanie(0);
                                });
                            }
                        }, 1500);;
                    }
                    else {
                        massage.innerHTML = "<p class='bad'>Źle! Spróbuj jeszcze raz</p>";
                        }
                    }
        });
    }
    //funkcja do wyświetlenia quizu
    btn.addEventListener("click", function () {
        btn.style.display = "none";  
        quiz_container.style.animation = "resize 2s forwards";
        quiz_questions.offsetHeight;
        quiz_questions.classList.add("pojawianie");
        quiz_questions.style.animationDelay="2s"
        wyswietl_pytanie(0);
        
        
    });
    

