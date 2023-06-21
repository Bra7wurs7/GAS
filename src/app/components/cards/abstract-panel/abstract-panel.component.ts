import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractPanel } from 'src/app/models/panel.model';

@Component({
  selector: 'app-abstract-panel',
  template: '',
})
export abstract class AbstractPanelComponent {
  @Output() internalLinkActivatedEvent: EventEmitter<string> = new EventEmitter()
  @Output() moveUpEvent: EventEmitter<void> = new EventEmitter()
  @Output() moveDownEvent: EventEmitter<void> = new EventEmitter()
  @Output() closePanelEvent: EventEmitter<void> = new EventEmitter()
  @Input() panel?: AbstractPanel;
  @Input() isActivePanel?: boolean = false;

  constructor() { } 
}