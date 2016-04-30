/**
 * Created by johan on 2016-04-30.
 */
var newNumber = function () {
    var beloppet = Number(document.getElementById("beloppet").value);
    //alert(txt);
    var momssats = Number(0.25);
    var momsAvdrag = Number(1 - ( 1 / (momssats + 1)));
    document.getElementById("minusMoms25").value = (beloppet - (beloppet * momsAvdrag)).toFixed(2) ;
    document.getElementById("avdragenMoms25").value = (beloppet * momsAvdrag).toFixed(2) ;

    document.getElementById("plusMoms25").value = (beloppet + (beloppet * momssats)).toFixed(2) ;
    document.getElementById("adderadMoms25").value = (beloppet * momssats).toFixed(2) ;

    momssats = Number(Number(document.getElementById("egenMomssats").value) / 100);
    momsAvdrag = (100 / (Number(document.getElementById("egenMomssats").value) + 100)).toFixed(2);

    document.getElementById("minusMomsEgen").value = (beloppet - (beloppet * momsAvdrag)).toFixed(2) ;
    document.getElementById("avdragenMomsEgen").value = (beloppet * momsAvdrag).toFixed(2) ;

    document.getElementById("plusMomsEgen").value = (beloppet + (beloppet * momssats)).toFixed(2) ;
    document.getElementById("adderadMomsEgen").value = (beloppet * momssats).toFixed(2) ;
};