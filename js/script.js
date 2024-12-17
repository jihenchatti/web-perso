function reponse(id) {
    if (
        (document.getElementById(id).os[0].checked===false) &&
        (document.getElementById(id).os[1].checked===true) &&
        (document.getElementById(id).os[2].checked===false) &&
        (document.getElementById(id).os[3].checked===false)
        ) {
        alert("Q1: Bravo! C'est la bonne réponse!");
        } else {
        console.log(document.getElementById(id).os[0].checked);
        alert("Q1: Désolé, la réponse est Mac OS.");
        }
    
    if (
        (document.getElementById(id).t[0].checked===false) &&
        (document.getElementById(id).t[1].checked===true) &&
        (document.getElementById(id).t[2].checked===false) &&
        (document.getElementById(id).t[3].checked===false)
        ) {
        alert("Q2: Bravo! C'est la bonne réponse!");
        } else {
        console.log(document.getElementById(id).t[0].checked);
        alert("Q2: Désolé, la réponse est 365.");
        }
     
    if (
            (document.getElementById(id).ww[0].checked===false) &&
            (document.getElementById(id).ww[1].checked===true) &&
            (document.getElementById(id).ww[2].checked===false) &&
            (document.getElementById(id).ww[3].checked===false)
            ) {
            alert("Q3: Bravo! C'est la bonne réponse!");
            } else {
            console.log(document.getElementById(id).ww[0].checked);
            alert("Q3: Désolé, la réponse est World Wide Web.");
            }  
    if (
            (document.getElementById(id).wwf[0].checked===false) &&
            (document.getElementById(id).wwf[1].checked===false) &&
            (document.getElementById(id).wwf[2].checked===true) &&
            (document.getElementById(id).wwf[3].checked===false)
            ) {
           alert("Q4: Bravo! C'est la bonne réponse!");
           } else {
           console.log(document.getElementById(id).wwf[0].checked);
            alert("Q4: Désolé, la réponse est Panda.");
           }   
    if (
            (document.getElementById(id).ordi[0].checked===true) &&
            (document.getElementById(id).ordi[1].checked===false) &&
            (document.getElementById(id).ordi[2].checked===false) &&
           (document.getElementById(id).ordi[3].checked===false)
            ) {
            alert("Q5: Bravo! C'est la bonne réponse!");
            } else {
            console.log(document.getElementById(id).ordi[0].checked);
            alert("Q5: Désolé, la réponse est IBM PC.");
            }                
        }


        
