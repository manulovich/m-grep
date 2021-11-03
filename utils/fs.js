import fs from 'fs/promises';

const readFile = (filePath) => {
    return fs.readFile(filePath)
        .then(response => response.toString())
        .catch(() => '');
};

const readDir = (dirPath) =>  {
    return fs.readdir(dirPath)
        .then(response => response)
        .catch(() => [])
}

const isFile = (condidateToFile) => {
    const regExpFile = /^\w+\.\w+$/;
    return Boolean(regExpFile.exec(condidateToFile));
}

export { readFile, readDir, isFile };
