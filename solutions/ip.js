/*Írj reguláris kifejezést IP-cím validálására! Teszteld is a megoldásod!
- A checkIP függvényben valósítsd meg a validálást, a paraméterként kapott 
IP-címet validálja le a függvény, és true|false legyen a visszatérési értéke 
attól függően, hogy valid|invalid a szám.*/

const checkIP = (IPNumber) => {
    const pattern = /^((25[0-5]|2[0-4][0-9]|[1]?[0-9]?[0-9])(\.|$)){4}/
    return IPNumber.match(pattern) ? true : false
}

    //console.log(checkIP('192.168.0.1'))

export default checkIP