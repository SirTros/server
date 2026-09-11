(function(){

"use strict";


function normalize(text){

    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g,"")
        .trim();

}


function answer(text){

    const t=normalize(text);


    if(
        t.includes("ahoj") ||
        t.includes("cau") ||
        t.includes("nazdar")
    ){

        return "Ahoj! 🦊 Co budeme dělat?";

    }


    if(
        t.includes("jak se jmenujes") ||
        t.includes("kdo jsi")
    ){

        return "Jsem Ouško AI, tvůj hlasový pomocník. 🦊";

    }


    if(
        t.includes("jak se mas")
    ){

        return "Mám se dobře! Jsem připravený poslouchat. 🦊";

    }


    if(
        t.includes("co delas")
    ){

        return "Čekám na tebe a poslouchám. 🦊";

    }


    if(
        t.includes("kolik je hodin") ||
        t.includes("jaky je cas")
    ){

        return "Teď je " +
            new Date().toLocaleTimeString(
                "cs-CZ",
                {
                    hour:"2-digit",
                    minute:"2-digit"
                }
            ) +
            ".";

    }


    if(
        t.includes("jake je datum") ||
        t.includes("jaky je datum") ||
        t.includes("kolikateho je")
    ){

        return "Dnes je " +
            new Date().toLocaleDateString(
                "cs-CZ"
            ) +
            ".";

    }


    if(
        t.includes("minecraft")
    ){

        return "Minecraft znám! 🧱 Můžeme řešit příkazy, stavění, pluginy nebo cokoliv dalšího.";

    }


    if(
        t.includes("lego")
    ){

        return "LEGO! 🧱 To mám rád. Můžeme vymyslet nějaký nový projekt.";

    }


    if(
        t.includes("html")
    ){

        return "HTML je základní jazyk pro strukturu webových stránek. 💻";

    }


    if(
        t.includes("javascript") ||
        t.includes("javascript")
    ){

        return "JavaScript umožňuje webu reagovat na uživatele a dělat programovatelné věci. 💻";

    }


    if(
        t.includes("python")
    ){

        return "Python je programovací jazyk používaný třeba pro programování, automatizaci a AI.";

    }


    if(
        t.includes("sirtros-city")
    ){

        return "SirTros-city znám! 🏙️";

    }


    if(
        t.includes("ousko")
    ){

        return "Jsem tady! 🦊";

    }


    if(
        t.includes("dekuju") ||
        t.includes("diky") ||
        t.includes("dik")
    ){

        return "Není zač! 🦊";

    }


    /*
    Jednoduchá matematika
    */

    let math =
        t.match(
            /^kolik je\s+([0-9+\-*/().\s]+)$/
        );

    if(math){

        try{

            const expression =
                math[1];

            if(
                !/^[0-9+\-*/().\s]+$/.test(
                    expression
                )
            ){

                throw new Error();

            }

            const result =
                Function(
                    '"use strict";return (' +
                    expression +
                    ')'
                )();

            if(
                Number.isFinite(result)
            ){

                return "Výsledek je " +
                    result +
                    ". 🧮";

            }

        }catch(e){}

    }


    return (
        "Rozumím. 🦊 " +
        "Tohle zatím neumím zodpovědět úplně přesně, " +
        "ale můžeš se mě zeptat na něco jiného."
    );

}


window.ouskoAI =
    async function(text){

        return answer(text);

    };

})();
