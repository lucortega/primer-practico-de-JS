debugger
let username = prompt ("ingrese su nombre")
username.toUpperCase
let edad = parseInt (prompt ("ingrese su edad"))

 if (edad <18) {
    console.warn ("pagina web solo disponible para mayores de edad")
    for (let i = 0 ; i < 3; i++) {
        if (i == 3) {
            break;
        }
        console.error ("VAMOS A AVISAR A TUS PAPAS")
    }
} else if (edad >=18){
    console.log ("bienvenidos a nuestra casa de apuestas")
}
