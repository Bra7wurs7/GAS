import { serializable } from "../helper/serialize.helper";

export abstract class NoteAttribute {
  isContainer: boolean;
  width: 'full' | 'max' | 'min' | 'unset';
  bordered: boolean;
  visibility: 'combat' | 'both' | 'nocombat';
  content: string;
  contentSlotId: string;
  constructor(
    width: 'full' | 'max' | 'min' | 'unset' = 'unset',
    bordered: boolean = false,
    visibility: 'combat' | 'both' | 'nocombat' = 'both',
    content: string = '',
    contentSlotId: string = '',
    isContainer: boolean = false,
  ) {
    this.width = width;
    this.bordered = bordered;
    this.visibility = visibility;
    this.content = content;
    this.contentSlotId = contentSlotId;
    this.isContainer = isContainer;
  }
}

@serializable
export class AttributeItem extends NoteAttribute {
  readonly className: string = 'AttributeItem';
  separator: 'thin' | 'medium' | 'wide' | 'none';
  fontSize: 'small' | 'medium' | 'large';
  italic: boolean;
  bold: boolean;
  constant: boolean;
  constructor(
    content: string = '',
    separator: 'thin' | 'medium' | 'wide' | 'none' = 'none',
    fontSize: 'small' | 'medium' | 'large' = 'medium',
    italic: boolean = false,
    bold: boolean = false,
    constant: boolean = false,
    width: 'full' | 'max' | 'min' | 'unset' = 'unset',
    bordered: boolean = false,
    visibility: 'combat' | 'both' | 'nocombat' = 'both',
    contentSlotId: string = '',
  ) {
    super(width, bordered, visibility, content);
    this.separator = separator;
    this.fontSize = fontSize;
    this.italic = italic;
    this.bold = bold;
    this.constant = constant;
    this.contentSlotId = contentSlotId;
  }
}

@serializable
export class AttributeContainer extends NoteAttribute {
  readonly className: string = 'AttributeContainer';
  isContainer = true;
  direction: 'row' | 'col' = 'row';
  justify: 'start' | 'end' | 'center' | 'around' | 'between' | 'evenly';
  align: 'stretch' | 'start' | 'center' | 'end' | 'baseline';
  children: NoteAttribute[] | undefined;
  constructor(
    children: NoteAttribute[] = [],
    direction: 'row' | 'col' = 'row',
    justify: 'start' | 'end' | 'center' | 'around' | 'between' | 'evenly' = 'start',
    align: 'stretch' | 'start' | 'center' | 'end' | 'baseline' = 'stretch',
    width: 'full' | 'max' | 'min' | 'unset' = 'max',
    bordered: boolean = false,
    visibility: 'combat' | 'both' | 'nocombat' = 'both',
  ) {
    super(width, bordered, visibility, '');
    this.children = children;
    this.direction = direction;
    this.justify = justify;
    this.align = align;
  }
}

@serializable
export class AttributeTable {
  readonly className: string = 'AttributeTable';
  float: 'left' | 'right' | 'unset';
  children: NoteAttribute[];
  constructor(float: 'left' | 'right' | 'unset' = 'right', children: NoteAttribute[] | undefined = undefined) {
    this.float = float;
    this.children = children ?? [new AttributeContainer([], 'col')];
  }
}

const defaultContainer: AttributeContainer = new AttributeContainer([], 'row', 'start', 'stretch', 'unset', false, 'both')

const defaultItem: AttributeItem = new AttributeItem('content', 'none', 'small', false, false, false, 'unset', false, 'both')


