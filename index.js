import { parseArguments } from './utils/cli.js';
import grep from './grep.js';

const { regExp, paths } = parseArguments(process.argv);
grep(paths, regExp, console.log, process.cwd());
