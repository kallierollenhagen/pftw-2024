// object is useful for labeling data. 
// Use {curly brackets}
// You have a KEY and you have a VALUE (vs. INDEXES with Arrays)
// To mutate or add to objects, use dot notation

const games = [
    { 
        title: 'Settlers of Catan', 
        type: 'board game', 
        numberOfPlayers: '3-4 players', 
        rating: '5 bags of popcorn', 
        shortDescription: 'On an island with valuable but limited resources, players compete for island takeover.' 
    },
    { 
        title: 'basketball', 
        type: 'sport', 
        numberOfPlayers: '2 teams, with 5 people per team', 
        rating: '7 bags of popcorn', 
        shortDescription: 'Basketball is a fast-paced, high-scoring sport where two teams compete over 4 quarters to score the most points. Points are scored by getting a ball through a hoop, and each team has a hoop on either ends of a court. Go wolves!' 
    },
    { 
        title: 'Hard to Get', 
        type: 'courting game', 
        numberOfPlayers: 'two people most often (but we all know there are no rules in the arena of love)', 
        rating: '2 bags of popcorn', 
        shortDescription: 'This is a psychological dating game, where one desperate-for-lover person makes themself appear unavailable to come off as desirable to a potential suitor. It has varying degrees of success, and is highly dependent on the individuals invovled.' 
    }
]

console.log(games);

const response = window.prompt("Enter a number between 1-3 and you'll learn about either a sport, board game, or dating game.") - 1
alert("The game you selected is " +games[response].title + ", a " +games[response].type + ". It involves " +games[response].numberOfPlayers + " and gets a rating of " +games[response].rating + ". In a nutshell: " +games[response].shortDescription)