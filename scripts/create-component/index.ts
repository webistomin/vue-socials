import consola from 'consola';
import create from './create';

(async () => {
  await create();
  consola.success('Happy coding!');
})();
