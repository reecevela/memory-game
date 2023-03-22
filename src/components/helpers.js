export function getRandomCards() {
    const random = Math.floor(Math.random() * 10);
    let cards;
    switch (random) {
    case 1:
        cards = ['😂', '❤️', '👍', '🤔', '😍', '🤣', '🥰', '🙌', '😊', '😎', '👀', '🤯'];
        break;
    case 2:
        cards = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink', 'black', 'white', 'gray', 'brown', 'teal'];
        break;
    case 3:
        cards = ['New York', 'Paris', 'London', 'Tokyo', 'Sydney', 'Rio de Janeiro', 'Cape Town', 'Dubai', 'Toronto', 'Moscow', 'Barcelona', 'Berlin'];
        break;
    case 4:
        cards = ['pizza', 'hamburger', 'taco', 'sushi', 'spaghetti', 'nachos', 'hot dog', 'steak', 'ramen', 'pad thai', 'lobster', 'sashimi'];
        break;
    case 5:
        cards = ['dog', 'cat', 'hamster', 'rabbit', 'parrot', 'turtle', 'fish', 'snake', 'spider', 'horse', 'frog', 'lizard'];
        break;
    case 6:
        cards = ['sun', 'moon', 'star', 'cloud', 'rainbow', 'thunder', 'lightning', 'snowflake', 'fire', 'earth', 'water', 'wind'];
        break;
    case 7:
        cards = ['piano', 'guitar', 'violin', 'trumpet', 'drums', 'saxophone', 'flute', 'harmonica', 'accordion', 'bass guitar', 'cello', 'harp'];
        break;
    case 8:
        cards = ['chocolate', 'candy', 'ice cream', 'cake', 'cookie', 'pie', 'donut', 'brownie', 'cupcake', 'caramel', 'fudge', 'macaroon'];
        break;
    case 9:
        cards = ['zombie', 'vampire', 'werewolf', 'witch', 'ghost', 'skeleton', 'mummy', 'monster', 'alien', 'dragon', 'unicorn', 'phoenix'];
        break;
    default:
        cards = ['😂', '❤️', '👍', '🤔', '😍', '🤣', '🥰', '🙌', '😊', '😎', '👀', '🤯'];
    }
    return cards;
}