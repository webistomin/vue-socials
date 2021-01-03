import { NodePlopAPI } from 'node-plop';
import { COMPONENTS_FOLDER } from './utils/constants';

export const enum IPlopfileTypeAnswers {
  SHARE = 'share',
  COUNT = 'count',
}

export interface IPlopfileAnswers {
  type: IPlopfileTypeAnswers;
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
        choices: [IPlopfileTypeAnswers.SHARE, IPlopfileTypeAnswers.COUNT],
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

    actions: () => {
      const DIST_PATH = `${COMPONENTS_FOLDER}/{{pascalCase name}}`;

      return [
        {
          type: 'add',
          path: `${DIST_PATH}/{{pascalCase name}}.ts`,
          templateFile: './templates/component.hbs',
        },
        {
          type: 'add',
          path: `${DIST_PATH}/index.ts`,
          templateFile: './templates/index.hbs',
        },
        {
          type: 'add',
          path: `${DIST_PATH}/docs/{{pascalCase name}}.stories.js`,
          templateFile: './templates/story.hbs',
        },
        {
          type: 'add',
          path: `${DIST_PATH}/tests/{{pascalCase name}}.spec.ts`,
          templateFile: './templates/test.hbs',
        },
      ];
    },
  });
};
