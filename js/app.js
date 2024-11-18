

const LIST = [
    {
        id: 1,
        nome: 'Mestre Yoda',
        avatar: 'images/yoda.png'
    },
    {
        id: 2,
        nome: 'Vader',
        avatar: 'images/vader.png'
    },
    
    {
        id: 3,
        nome: 'R2D2',
        avatar: 'images/r2d2.png'
    },
    
    {
        id: 4,
        nome: 'Luke',
        avatar: 'images/luke.png'
    },

    {
        id: 5,
        nome: 'Leia',
        avatar: 'images/leia.png'
    },
    
    {
        id: 6,
        nome: 'Hansolo',
        avatar: 'images/hansolo.png'
    },
    
    {
        id: 7,
        nome: 'Chewbacca',
        avatar: 'images/chewbacca.png'
    },
    
    {
        id: 8,
        nome: 'C3PO',
        avatar: 'images/c3po.png'
    }
]


const App = new Vue({
    el: '#app',
    data: {
        title: 'Star Wars Lego',
        userName: 'Gabriel Freitas',
        characters: LIST
    },
    methods: {
        like(userName) {
            alert(`O Personagem ${userName} recebeu um like!`)
        }
    }
})