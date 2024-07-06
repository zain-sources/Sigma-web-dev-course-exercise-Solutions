const fs = require('fs');
const path = require('path');


let dir_to_read  = './clutter';
let dir_to_write = './clutter';

let folders = [];
let new_file_dirs = [];
let old_file_dirs = [];


const files = fs.readdirSync(dir_to_read);
files.forEach(file => {
    const ext = path.extname(file).slice(1);
    if (!folders.includes(ext)) {
        folders.push(ext);
    }
    new_file_dirs.push(path.join(dir_to_write, ext, file));
    old_file_dirs.push(path.join(dir_to_read, file));


});

function createFolder(folder) {
    if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder, { recursive: true });
    }
}

function mover(old_path, new_path) {
    fs.rename(old_path, new_path, function (err) {
        if (err) throw err
        console.log('Successfully renamed - AKA moved!')
    })
}



folders.forEach(folder => {
    createFolder(path.join(dir_to_write, folder));
});

for (let i = 0; i < new_file_dirs.length; i++) {
    mover(old_file_dirs[i], new_file_dirs[i]);
}


