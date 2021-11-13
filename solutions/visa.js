/*- Írj reguláris kifejezést Visa típusú bankkártyák számának 
validálására! Teszteld is a megoldásod!
- A checkVisa függvényben valósítsd meg a validálást, a paraméterként kapott 
kártyaszámot validálja le a függvény, és true|false legyen a visszatérési értéke 
attól függően, hogy valid|invalid a szám.*/

    const checkVisa = (cardNumber) => {
        return cardNumber.match(/^4[0-9]{15}$/) ? true : false
    }

    //console.log(checkVisa('4123456789123466'))

export default checkVisa