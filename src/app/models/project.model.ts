import { Category } from "./category.model";
import { CategoryPanel, GenericPanel, NotePanel } from "./panel.model";
import { Note } from "./note.model";
import { AttributeContainer, AttributeItem, AttributeTable } from "./noteAttribute.model";
import { PanelView } from "./panelView.model";

export class Project {
  title: string;
  /** Object representing a map of all notes for this project */
  notes: Map<string, Note>;
  /** Object representing a map of all note categories for this project*/
  categories: Map<string, Category>;
  /** */
  views: PanelView[] = [];
  /** */
  activeViewIndex: number;
  /** version of GAS that this Project last saved with */
  version: number;
  constructor(
    title: string,
    notes: Map<string, Note>,
    categories: Map<string, Category>,
    views: PanelView[],
    activeViewIndex: number = 0,
    version: number = 1,
  ) {
    this.title = title
    this.notes = notes;
    this.categories = categories;
    this.views = views;
    this.activeViewIndex = activeViewIndex;
    this.version = version
  }

  toStringifiableProject(): StringifiableProject {
    const notes: any = {};
    const categories: any = {};
    const views: PanelView[] = []
    this.notes.forEach((value, key) => {
      notes[key] = value;
    })
    this.categories.forEach((value, key) => {
      categories[key] = value;
    })
    this.views.forEach((view) => {
      const viewCopy = Object.assign({}, view);
      views.push(viewCopy);
      const panels: GenericPanel[] = [];
      viewCopy.panels.forEach((panel) => {
        const panelCopy = Object.assign({}, panel);
        panels.push(panelCopy);
        panelCopy.htmlElement = undefined;
      })
    })
    return new StringifiableProject(this.title, notes, categories, views, this.activeViewIndex, this.version);
  }
}

export class StringifiableProject {
  title: string;
  /** Object representing a map of all notes for this project */
  notes: any;
  /** Object representing a map of all note categories for this project*/
  categories: any;
  /** */
  views: PanelView[] = [];
  /** */
  activeViewIndex: number;
  /** version of GAS that this Project last saved with */
  version: number;
  constructor(
    title: string,
    notes: any,
    categories: any,
    views: PanelView[],
    activeViewIndex: number = 0,
    version: number = 1,
  ) {
    this.title = title
    this.notes = notes;
    this.categories = categories;
    this.views = views;
    this.activeViewIndex = activeViewIndex;
    this.version = version
  }

  toProject(): Project {
    const notes: Map<string, Note> = new Map();
    const categories: Map<string, Category> = new Map();
    Object.keys(this.notes).forEach((key: string) => {
      notes.set(key, this.notes[key] as Note)
    });
    Object.keys(this.categories).forEach((key: string) => {
      categories.set(key, this.categories[key] as Category)
    });
    return new Project(this.title, notes, categories, this.views, this.activeViewIndex, this.version);
  }
}

const defaultAttributeTable: AttributeTable = {
  float: 'right',
  children: [
    new AttributeContainer(
      [
        new AttributeItem(
          'Monster', 'none', 'large', false, true, true, 'full', false, 'both'
        ),
        new AttributeItem(
          '', 'none', 'medium', true, false, false, 'full', false, 'both', '001'
        ),
        new AttributeItem(
          '', 'medium'
        ),
        new AttributeContainer([
          new AttributeItem(
            'Armor Class', 'none', 'medium', false, true, true, 'unset', false, 'both'
          ),
          new AttributeItem(
            '', 'none', 'medium', false, false, false, 'unset', false, 'both', '002'
          )
        ], 'row', 'start', 'stretch', 'full', false, 'both'),
        new AttributeContainer([
          new AttributeItem(
            'Hit Points', 'none', 'medium', false, true, true, 'unset', false, 'both'
          ),
          new AttributeItem(
            '', 'none', 'medium', false, false, false, 'unset', false, 'both', '003'
          )
        ], 'row', 'start', 'stretch', 'full', false, 'both'),
        new AttributeContainer([
          new AttributeItem(
            'Speed', 'none', 'medium', false, true, true, 'unset', false, 'both'
          ),
          new AttributeItem(
            '', 'none', 'medium', false, false, false, 'unset', false, 'both', '004'
          )
        ], 'row', 'start', 'stretch', 'full', false, 'both'),
        new AttributeItem(
          '', 'medium'
        ),
        new AttributeContainer([
          new AttributeContainer([
            new AttributeItem(
              'STR', 'none', 'medium', false, true, true, 'unset', false, 'both'
            ),
            new AttributeItem(
              '', 'none', 'medium', false, false, false, 'unset', false, 'both', '005'
            )
          ], 'col', 'start', 'center', 'full', false, 'both'),
          new AttributeContainer([
            new AttributeItem(
              'DEX', 'none', 'medium', false, true, true, 'unset', false, 'both'
            ),
            new AttributeItem(
              '', 'none', 'medium', false, false, false, 'unset', false, 'both', '006'
            )
          ], 'col', 'start', 'center', 'full', false, 'both'),
          new AttributeContainer([
            new AttributeItem(
              'CON', 'none', 'medium', false, true, true, 'unset', false, 'both'
            ),
            new AttributeItem(
              '', 'none', 'medium', false, false, false, 'unset', false, 'both', '007'
            )
          ], 'col', 'start', 'center', 'full', false, 'both'),
          new AttributeContainer([
            new AttributeItem(
              'INT', 'none', 'medium', false, true, true, 'unset', false, 'both'
            ),
            new AttributeItem(
              '', 'none', 'medium', false, false, false, 'unset', false, 'both', '008'
            )
          ], 'col', 'start', 'center', 'full', false, 'both'),
          new AttributeContainer([
            new AttributeItem(
              'WIS', 'none', 'medium', false, true, true, 'unset', false, 'both'
            ),
            new AttributeItem(
              '', 'none', 'medium', false, false, false, 'unset', false, 'both', '009'
            )
          ], 'col', 'start', 'center', 'full', false, 'both'),
          new AttributeContainer([
            new AttributeItem(
              'CHA', 'none', 'medium', false, true, true, 'unset', false, 'both'
            ),
            new AttributeItem(
              '', 'none', 'medium', false, false, false, 'unset', false, 'both', '010'
            )
          ], 'col', 'start', 'center', 'full', false, 'both'),
        ], 'row', 'start', 'stretch', 'full', false, 'both'),
        new AttributeItem(
          '', 'medium'
        ),
        new AttributeContainer([
          new AttributeItem(
            'Senses', 'none', 'medium', false, true, true, 'unset', false, 'both'
          ),
          new AttributeItem(
            '', 'none', 'medium', false, false, false, 'unset', false, 'both', '011'
          )
        ], 'row', 'start', 'stretch', 'full', false, 'both'),
        new AttributeContainer([
          new AttributeItem(
            'Languages', 'none', 'medium', false, true, true, 'unset', false, 'both'
          ),
          new AttributeItem(
            '', 'none', 'medium', false, false, false, 'unset', false, 'both', '012'
          )
        ], 'row', 'start', 'stretch', 'full', false, 'both'),
        new AttributeContainer([
          new AttributeItem(
            'Challenge', 'none', 'medium', false, true, true, 'unset', false, 'both'
          ),
          new AttributeItem(
            '', 'none', 'medium', false, false, false, 'unset', false, 'both', '013'
          )
        ], 'row', 'start', 'stretch', 'full', false, 'both'),
        new AttributeItem(
          '', 'medium'
        ),
      ], 'col', 'start', 'stretch', 'max', false, 'both'
    )
  ]
}

export const defaultProject: StringifiableProject = new StringifiableProject(
  'Default Project',
  {
    'defaultNote': new Note('defaultNote', 'defaultCategory', {
      '001': 'Medium humanoid, any alignment',
      '002': '10',
      '003': '22',
      '004': '30 ft.',
      '005': '10 (+0)',
      '006': '10 (+0)',
      '007': '10 (+0)',
      '008': '10 (+0)',
      '009': '10 (+0)',
      '010': '10 (+0)',
      '011': 'passive Perception 10',
      '012': '-',
      '013': '1 (200 XP)',
    }, 'Some Note Content Some Note Content [[defaultCategory]] Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note [[defaultCategory]] Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content Some Note Content '),
  },
  {
    'defaultCategory': new Category('defaultCategory', defaultAttributeTable, 'Some Template Content')
  },
  [
    {
      panels: [new CategoryPanel('defaultCategory'), new NotePanel('defaultNote')],
      activePanelIndex: 0,
    }
  ],
  0,
  1,
)


