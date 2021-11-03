import path from 'path';
import { readFile, readDir, isFile } from './utils/fs.js';

const grep = (directions, regExp, callback, currentDir = path.resolve()) => {
    directions.forEach(async (direction) => {
        const workDir = path.resolve(currentDir, direction);

        /* is file */
        if (isFile(direction)) {
            const content = await readFile(workDir);
            
            if (!regExp.exec(content)) return; // next direction
            else callback(workDir);
        }

        /* is folder */
        const directionFolder = await readDir(workDir);
        grep(directionFolder, regExp, callback, workDir);
    });
};

export default grep;
