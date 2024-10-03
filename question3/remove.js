const fs = require('fs');
const path = require('path');


const logsDir = path.join(__dirname, 'Logs');


function removeLogFiles() {
    fs.access(logsDir, (err) => {
        if (err) {
            console.log('Logs directory does not exist.');
            return;
        }


        fs.readdir(logsDir, (err, files) => {
            if (err) throw err;

            files.forEach(file => {
                const filePath = path.join(logsDir, file);
                fs.unlink(filePath, (err) => {
                    if (err) throw err;
                    console.log(`delete files...${file}`);
                });
            });

            fs.rmdir(logsDir, (err) => {
                if (err) throw err;
            });
        });
    });
}

removeLogFiles();