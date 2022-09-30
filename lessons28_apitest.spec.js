//referencja aby wyswietlało mi potrzebne metody do cypressa
/// <reference types="cypress" />

describe('API REST Tests', () => {

    it.skip('API REST Tests', () => {

        cy.request("GET","https://reqres.in/api/users?page=2").then((response)=>{

        expect(response.status).eq(200)
        expect(response.duration).below(1000)
        expect(response.body.data).to.have.length(6)
        cy.writeFile("cypress/fixtures/user.json",{users: response.body.data})

        })

        
    });

    
    it.skip('Register new users', () => {

        cy.request(
            {
                method:'POST',
                url:'https://reqres.in/api/register',
                body:{
                    "email": "eve.holt@reqres.in",
                    "password": "pistol"
                }

            }
        ).then((response)=>{

            expect(response.status).eq(200)
            expect(response.duration).below(1000)
            expect(response.body).to.have.property('id')
            expect(response.body).to.have.property('token')
            cy.writeFile("cypress/fixtures/token.json",{id: response.body.id , token:response.body.token})
        })
        
    });


    it.skip('Create new users', () => {

        cy.request({
            method:"POST",
            url:"https://reqres.in/api/users",
            body:{
                "name": "morpheus",
                "job": "leader"
            }
        }).then((response)=>{

            expect(response.status).eq(201)
            expect(response.duration).below(1000)
            expect(response.body).to.have.property('createAt')
            expect(response.body).to.have.property('id')
            expect(response.body).to.have.property('job').eq('leader')
            expect(response.body).to.have.property('name').eq('morpheus')

        })
       
    });


    it('test zle logowanie', () => {
        cy.request({
            method:"POST",
            url:"https://reqres.in/api/login",
            body:{
                "email": "peter@klaven"
            },
            failOnStatusCode: false
        }).then((response) =>{

            expect(response.status).eq(400)
            expect(response.duration).below(1000)
            expect(response.body).to.have.property('error').eq('Missing password')
        })
    });
    
});