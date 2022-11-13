// Le carré
// Demandez(à(l’utilisateur(de(saisir(un(nombre(X(compris(entre(1(et(10.(
    
let num = prompt("choisir un nombre entre 1 et 10");
const ashtag = "#";
    if (num >= 1 && num <= 10) {
    // Affichez(en(console(un(carré(composé(de(X(#(sur(chaque(ligne.
        num.forEach(num => {
            
            console.log( ashtag.repeat(num));              
        });
} else {
    alert("ceci n'est pas un nombre compris entre 1 et 10")
}