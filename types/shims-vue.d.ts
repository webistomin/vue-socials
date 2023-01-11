declare module '*.vue' {
  import { DefineComponent } from 'vue';

  // eslint-disable-next-line @typescript-eslint/ban-types,@typescript-eslint/no-explicit-any
  const Component: DefineComponent<{}, {}, any>;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  export default Component;
}
