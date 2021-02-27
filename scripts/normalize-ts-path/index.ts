/**
 * Normalize d.ts path. For some reason typescript doesn't transform paths in d.ts files
 */

import {
  readFileSync, writeFileSync, readdirSync, lstatSync,
} from 'fs';
import { resolve } from 'path';

const COMPONENTS_PATH = resolve(__dirname, '../../dist/types/components');
const components = readdirSync(resolve(__dirname, '../../dist/types/components'));

components.forEach((component) => {
  if (lstatSync(resolve(COMPONENTS_PATH, component)).isDirectory()) {
    const componentFile = resolve(COMPONENTS_PATH, `${component}/${component}.d.ts`);
    const data = readFileSync(componentFile, 'utf-8');
    const result = data.replace(/@\/mixins/g, '../../mixins');
    writeFileSync(componentFile, result, 'utf-8');
  }
});
