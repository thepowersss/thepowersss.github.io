function generateCheese() {
    document.getElementById('/scripts/sc2_cheese_list.txt').addEventListener('change', function selectedFileChanged() {
        if (this.files.length === 0) {
            console.log('No file selected.');
            return;
        }

        const reader = new FileReader();
        reader.onload = function fileReadCompleted() {
            // when the reader is done, the content is in reader.result.
            console.log(reader.result);
        };
        reader.readAsText(this.files[0]);
        var textByLine = reader.result.split("\n");
        var pick = Math.floor(Math.random() * textByLine.length);
        document.getElementById("cheese_display").innerHTML = textByLine[pick];
    });
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