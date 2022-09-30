


//cypress hooks - są sposobem na wykonanie pewnego zestawu zadan przed lub po kazdym przypadku testowym
//wszystke fukcje 
describe('Hooks', () => {

    before(()=>{
        //uruchmaianie raz przed testami
    }
    )
    beforeEach(()=>{
        //uruchomienie przed kazdym testem
    }
    )
    afterEach(()=>{
        //uruchomienie po kazdym testem
    }
    )
    after(()=>{
        //uruchomienie raz po testach
    }
    )
});