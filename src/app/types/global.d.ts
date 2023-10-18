declare module '*.scss' {
  type IClassNames = Record<string, string>
  const classNames: IClassNames
  export = classNames
}

declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare const __IS_DEV__: boolean
declare const __API__: string
declare const __PROJECT__: 'storybook' | 'frontend' | 'jest'

type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T

declare module '@editorjs/link';
declare module '@editorjs/list';
declare module '@editorjs/raw';
declare module '@editorjs/simple-image';
declare module '@editorjs/image';
declare module '@editorjs/checklist';
declare module '@editorjs/embed';
declare module '@editorjs/quote';
