
/*
    überprüft ob Cookies existieren und wenn nicht erstellt er einen mit dem Wert 1.
    Wenn durch drücken des "Akzeptieren" Knopfs "cookies" = 0 ist wird das banner sofort geschlossen.
    Wenn man einmal die Cookies akzeptiert kommt der Banner erst wieder wenn man seine Cookies auf der Seite löscht.
*/
function cookiecheck() {
    if (document.cookie == "") {
        document.cookie = "cookies=1"
    }
    else if (getCookie("cookies") == 0) {
        acceptCookies();
    }
}

/*
    Nimmt sich alle cookies der Seite und sucht nach dem angegbenen Namen. 
    Wenn der Name gefunden wird wird der Wert des Cookies zurückgegeben. Code von Bro Code.
*/
function getCookie(name) {

    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;

    cArray.forEach(element => {
        if (element.indexOf(name) == 0) {
            result = element.substring(name.length + 1)
        }
    }
    )
    return result;
}

//Das hier ist um das Kontaktpopup anzuzeigen
function openPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
}

//Das ist um das Kontaktpopup wieder zu schließen
function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}

//Das ist um den Cookiebanner zu schließen
function acceptCookies() {
    var banner = document.querySelector('.cookie-banner');
    banner.style.display = 'none';
    document.cookie = "cookies=0"  //cookies deaktivieren
}