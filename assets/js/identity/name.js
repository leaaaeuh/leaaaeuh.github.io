cleanup = function (a) {

    if (typeof a === 'string') {

        var str = a; var tab_accent_brut = "ÀÁÂÃÄÅàáâãäåÒÓÔÕÖØòóôõöøÈÉÊËèéêëÇçÌÍÎÏìíîïÙÚÛÜùúûüÿÑñ";
        var tab_sansAccent_brut = "aaaaaaaaaaaaooooooooooooeeeeeeeecciiiiiiiiuuuuuuuuynn";
        var tab_accent = tab_accent_brut.split('');
        var tab_sansAccent = tab_sansAccent_brut.split('');
        tabCorrAcc = new Array();
        var i = -1;
        while (tab_accent[++i]) {
            tabCorrAcc[tab_accent[i]] = tab_sansAccent[i]
        }
        tabCorrAcc['Œ'] = 'OE';
        tabCorrAcc['œ'] = 'oe';
        str = str.replace(/./g, function ($0) {
            return (tabCorrAcc[$0]) ? tabCorrAcc[$0] : $0
        })
        str = str.replace(/&amp;/g, '');
        str = str.replace(/_amp;/g, '');
        str = str.replace(/&lt;/g, '');
        str = str.replace(/_lt;/g, '');
        str = str.replace(/&gt;/g, '');
        str = str.replace(/_gt;/g, '');
        str = str.replace(/(-| |#|"|@|:|\.|,|;|'|%|!|²|=|÷|\+|\?|\/|\[|\]|\{|\}|\*|\^|\$|\\|`|"|'|¨|€|£|¤|µ|§|~|ƒ|„|©|°)/g, '')
        return str;
    }
}


const model_name = "Léa Pauvarel"
var list = document.querySelectorAll('.model_name');
list.forEach(function (element) {
    element.innerHTML = model_name;
});

var mail = document.querySelector('.contact .mail')
if(mail){
    mail.href = `mailto:${cleanup(model_name.toLowerCase())}@gmail.com`;
    mail.innerHTML = cleanup(model_name.toLowerCase()) + '@gmail.com';
}

var mailicon = document.querySelector('.social-links .mail')
if(mailicon){
    mailicon.href = `mailto:${cleanup(model_name.toLowerCase())}@gmail.com`;
}

document.title = `${model_name} - Nudes Sextapes Sexcams`;