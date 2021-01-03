import path from 'path';
import nodePlop from 'node-plop';
import consola from 'consola';

const plopFilePath = path.join(__dirname, 'plopfile.ts');
const plop = nodePlop(plopFilePath);
const generator = plop.getGenerator('package');

const create = async (): Promise<void> => {
  const { type, name } = await generator.runPrompts();

  const { changes, failures } = await generator.runActions({ type, name });

  if (changes.length) {
    const filteredChanges = changes.filter((item) => item.type === 'add');

    filteredChanges.forEach((change) => {
      consola.success(change.path);
    });
  }

  if (failures.length) {
    failures.forEach((failure) => {
      consola.error(failure.path);
      consola.error(failure.error);
    });
  }
};

export default create;
