/*Az előző három reguláris kifejezést és a validálást egy objektumon belül készítsd el. 
- Importáld be a másik három fájlban található függvényeket, és azokat használd 
fel az objektumon belül.
- `rules`: a checker objektumnak legyen egy `rules` property-je, amely objektumban tárolja a függvényeket.
- `validate`: validate metódus, amely paraméterként kap egy string-értéket, és azt, hogy melyik mintát kell ráilleszteni, amely lehet ['visa'|'ip'|'mac']. 
Attól függően hívja meg a `rules`-ban található függvényeket, 
hogy mi a minta neve. A visszatérési értéke a kiválasztott függvény 
visszatérési értéke legyen.*/

import checkIP from './ip.js'
import checkMAC from './mac.js'
import checkVisa from './visa.js'

    const checker = {
        rules: {
            ip: checkIP,
            mac: checkMAC,
            visa: checkVisa
        },
        validate(str,pattern) {
            return this.rules[pattern](str)
        }
    }

//console.log(checker.validate('192.168.0.0','ip'))

export default checker