import { NodePlopAPI } from 'node-plop';
import { COMPONENTS_FOLDER } from './utils/constants';

export const enum IPlopfileComponentTypes {
  SHARE = 'share',
  COUNT = 'count',
}

export interface IPlopfileAnswers {
  type: IPlopfileComponentTypes;
  name: string;
}

module.exports = function createPlop(plop: NodePlopAPI): void {
  plop.setGenerator('package', {
    description: 'Create new social component',

    prompts: [
      {
        type: 'list',
        name: 'type',
        message: 'What type of component you want?',
        choices: [IPlopfileComponentTypes.SHARE, IPlopfileComponentTypes.COUNT],
      },
      {
        type: 'input',
        name: 'name',
        message: 'Component name? (PascalCase)',
        validate(value) {
          if ((/^([a-z0-9]*[A-Z][A-Z0-9]*[a-z][A-Za-z0-9]*)*$/).test(value)) {
            return true;
          }

          return 'Name should be in PascalCase';
        },
      },
    ],

    actions: (answers) => {
      const DIST_PATH = `${COMPONENTS_FOLDER}/{{pascalCase name}}`;
      const { type } = answers as IPlopfileAnswers;

      return [
        {
          type: 'add',
          path: `${DIST_PATH}/{{pascalCase name}}.ts`,
          templateFile: `./templates/${type}/component.hbs`,
        },
        {
          type: 'add',
          path: `${DIST_PATH}/index.ts`,
          templateFile: `./templates/${type}/index.hbs`,
        },
        {
          type: 'add',
          path: `${DIST_PATH}/docs/{{pascalCase name}}.stories.ts`,
          templateFile: `./templates/${type}/story.hbs`,
        },
        {
          type: 'add',
          path: `${DIST_PATH}/tests/{{pascalCase name}}.spec.ts`,
          templateFile: `./templates/${type}/test.hbs`,
        },
      ];
    },
  });
};
