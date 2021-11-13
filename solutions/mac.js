/*Írj reguláris kifejezést MAC-cím validálására! Teszteld is a megoldásod!
- A checkMAC függvényben valósítsd meg a validálást, a paraméterként kapott 
IP-címet validálja le a függvény, és true|false legyen a visszatérési értéke 
attól függően, hogy valid|invalid a szám.*/

const checkMAC = (MACNumber) => {
    const pattern = /^([a-fA-F0-9]{2}:){5}[a-fA-F0-9]{2}$/i
    return MACNumber.match(pattern) ? true : false
}

    //console.log(checkMAC('a1:B2:c3:D4:e5:f6'))

export default checkMAC