'number' + 3 + 3
result: 'number33'  // concatenation plus k stroke

null + 3
result: 3  // null eto false znachti 0 + 3
5 && "qwerty"
result: "qwerty" //rightassociation

+'40' + +'2' + "hillel"
result: "42hillel" // iz stroki sdelali chislo (40 i 2), a potom concatenation

'10' - 5 === 6
result: false // 5 ne ravno 6

true + false // 1 + 0
result: 1

'4px' - 3
result: NaN // eto ne chislo

'4' - 3
result: 1 // stroka stala number

'6' + 3 ** 0
result: '61' // snachala vozveli v stepen', a potom concatenation

12 / '6'
result: 2 // prosto delenie :)

'10' + (5 === 6);
result: '10false' //snachala skobki, v nix false, a potom concatenation

null == ''
result: false //

3 ** (9 / 3);
result: 27 // snachala skobki, matematika 2 klass :)

!!'false' == !!'true'
result: true //true == true 

0 || '0' && 1
result: 1   // rightassociating

(+null == false) < 1
result: false  //v skobkax bydet true, a true eto 1

false && true || true
result: true //  esli hot' odin v 'OR' condition is true then true (net skobok)

false && (false || true)
result: false  // 'AND' condition i odno false to false (i tyt skobki)

(+null == false) < 1 ** 5
result: false  //v skobkax bydet true, a true eto 1