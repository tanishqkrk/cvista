export interface Element {
  id: string;
  order: number;
  type: string;
  heading?: Heading;
  text?: Text;
  img?: Image;
  table?: Table;
  ulist?: UList;
  olist?: OList;
}

export interface Heading {
  heading: string;
}

export interface Text {
  text: string;
}
export interface Image {
  url: string;
  width: number;
  height: number;
}
export interface Table {
  width: string[] | number[];
  height: string[] | number[];
  body: [{ text: string; id: string }][];
}
export interface UList {
  items: ListItem[];
}
export interface OList {
  items: ListItem[];
}

export interface ListItem {
  id: string;
  content: string;
  order: number;
}
