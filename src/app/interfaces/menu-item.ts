export interface MenuItem {
  name: string;
  description: string;
  funcs?: (() => any)[];
}
