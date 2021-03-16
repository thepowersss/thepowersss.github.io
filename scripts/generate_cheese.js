function generateCheese() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var textByLine = this.responseText.split("\n");
            var pick = Math.floor(Math.random() * textByLine.length);
            document.getElementById("cheese_display").innerHTML = textByLine[pick];
            //document.getElementById("demo").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "/scripts/sc2_cheese_list.txt", true);
    xhttp.send();
}
    /* doesn't work because front-end cannot see local files
    const fs = require('fs');
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
    */