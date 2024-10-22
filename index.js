// Classe herói genérico
class Hero {
    // Construtor 
    constructor(name, age, type) {
        this.name = name; 
        this.age = age;    
        this.type = type;  
    }

    // Método ataque do herói
    attack() {
        let attackMove;

        // Estrutura de decisão para definir o ataque com base no tipo do herói
        if (this.type === 'mago') {
            attackMove = 'usou magia';
        } else if (this.type === 'guerreiro') {
            attackMove = 'usou espada';
        } else if (this.type === 'monge') {
            attackMove = 'usou artes marciais';
        } else if (this.type === 'ninja') {
            attackMove = 'usou shuriken';
        } else {
            attackMove = 'não tem ataque definido';  // Caso o tipo não seja conhecido
        }

        // Exibir a mensagem do ataque
        console.log(`O ${this.type} atacou usando ${attackMove}`);
    }
}

// Criando instâncias de heróis
const hero1 = new Hero('Gandalf', 150, 'mago');
const hero2 = new Hero('Conan', 35, 'guerreiro');
const hero3 = new Hero('Ryu', 40, 'monge');
const hero4 = new Hero('Naruto', 20, 'ninja');

// Exemplo de ataques
hero1.attack();  // Output: O mago atacou usando magia
hero2.attack();  // Output: O guerreiro atacou usando espada
hero3.attack();  // Output: O monge atacou usando artes marciais
hero4.attack();  // Output: O ninja atacou usando shuriken
