//referencja aby wyswietlało mi potrzebne metody do cypressa
/// <reference types="cypress" />

//TEST RETIES - puszczcenie drugi raz testu w przypadku niepowidzenia , niezaładowania, strona sie nie wgrała itp.


//exaple 1
//nowe parametry wpisujemy w pliku cypress.json

// "reties":{
//     //puszczcenie w trybie headless, powtarzaj testy 2
//     "runMode": 2,
//     //pusczenie testów w trybie wykonalnym, powtarzaj testy 1
//     "openMode": 1
// }

//exaple 2
//nowe parametry wpisujemy w pliku cypress.json
//dla run i open wykonywane jest to samo
// {
//     "reties":1
// }


//exaple 3
//uzywanie tylko na przypadku testowym
it('allow user to login',
{
     "reties":{
            "runMode": 2,
            "openMode": 1,
            },
}, 
() => {
   //....
});