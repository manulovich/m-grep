import path from 'path';
import fs from 'fs';
import { readDir, isFile } from './utils/fs.js';

const grep = (directions, regExp, callback, currentDir = path.resolve()) => {
    directions.forEach(async (direction) => {
        const workDir = path.resolve(currentDir, direction);

        /* is file */
        if (isFile(direction)) {
            const readFileStream = fs.createReadStream(workDir);

            readFileStream.on('data', (chunk) => {
                if (regExp.exec(chunk.toString())) {
                    readFileStream.destroy();
                    callback(workDir);
                };
            });
        }

        /* is folder */
        const directionFolder = await readDir(workDir);
        grep(directionFolder, regExp, callback, workDir);
    });
};

export default grep;
