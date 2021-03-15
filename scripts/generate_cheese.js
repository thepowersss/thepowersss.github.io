const fs = require('fs');
function generateCheese() {
    

    fs.readFile('/scripts/sc2_cheese_list.txt', 'utf8' , (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);
        var textByLine = data.split("\n");
        var pick = Math.floor(Math.random() * textByLine.length);
        document.getElementById("cheese_display").innerHTML = textByLine[pick];
        return textByLine[pick];
    });
}