const fs = require('fs');
const path = require('path');


const logsDir = path.join(__dirname, 'Logs');


function addLogFiles() {
    fs.access(logsDir, (err) => {
        if (err) {
            fs.mkdir(logsDir, (err) => {
                if (err) throw err;
                createFiles();
            });
        } else {
            createFiles();
        }
    });
}


function createFiles() {
    process.chdir(logsDir);

    for (let i = 0; i < 10; i++) {
        const fileName = `log${i}.txt`;
        fs.writeFile(fileName, `This is log file ${i}`, (err) => {
            if (err) throw err;
            console.log(fileName);
        });
    }
}


addLogFiles()