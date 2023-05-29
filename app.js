let pronoun = ['the','our'];
let adj = ['great','big'];
let noun = ['jogger', 'racoon'];
let ext = ['.com', '.us', '.uk', '.de', '.ie'];
let outputDiv = document.getElementById('output');

for ( i = 0; i < pronoun.length; i++) {

    for ( j = 0; j < adj.length; j++) {

        for ( k = 0; k < noun.length; k++) {

            for ( l = 0; l < ext.length; l++) {

            console.log(pronoun[i] + adj[j] + noun[k] + ext[l]);
            let paragraph = document.createElement('p');
            paragraph.textContent = (pronoun[i] + adj[j] + noun[k] + ext[l]);
            outputDiv.appendChild(paragraph);
        }
        }
    }
    
}