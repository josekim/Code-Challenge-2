// @flow

export type data = {
  organize: boolean,
  sender: string,
  domain: string,
  email: string,
  folder: string
};

declare var module: {
  hot: {
    accept(path: string, callback: () => void): void
  }
};
