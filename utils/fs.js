import fs from 'fs/promises';

const readDir = (dirPath) =>  {
    return fs.readdir(dirPath)
        .then(response => response)
        .catch(() => [])
}

const isFile = (condidateToFile) => {
    const regExpFile = /\.\w+$/;
    return Boolean(regExpFile.exec(condidateToFile));
}

export { readDir, isFile };
