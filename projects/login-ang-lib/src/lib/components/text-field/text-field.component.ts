import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-text-field',
  imports: [FormsModule, CommonModule],
  templateUrl: './text-field.component.html',
  styleUrl: './text-field.component.css',
})
export class TextFieldComponent {
  @Input('textFieldModel') textFieldModel: TextField | null = null;
  @Output() eventEmitter = new EventEmitter();
  @Output() iconEventEmitter = new EventEmitter();
  onEnter() {
    if (this.textFieldModel!['isDisabled']) {
      this.eventEmitter.emit(this.textFieldModel);
    }
  }
  onIconClick() {
    if (this.textFieldModel!['isDisabled']) {
      this.iconEventEmitter.emit(this.textFieldModel);
    }
  }
}

export enum InputContent {
  Text = '^[a-zA-Z0-9\\s]+$',
  Number = '^\\d+$',
  AlphaNumeric = '^[a-zA-Z0-9]+$',
  Email = '^[\\w.-]+@[\\w.-]+\\.\\w{2,}$',
  Phone = '^\\+?[0-9]{10,15}$',
  Password = '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,}$',
}

export enum InputType {
  Text = 'text',
  Password = 'password',
}

export class TextField {
  //common
  public tag: number = 0;
  public isDisabled: boolean = false;
  //Fieldset;
  public label: string = '';
  public isRequired: boolean = false;
  public customFieldSet: string = '';
  //input
  public placeHolder: string = '';
  public value: string = '';
  public inputContent: InputContent = InputContent.Text;
  public inputType: InputType = InputType.Text;
  public customInput: string = '';
  //icon
  public isIcon: boolean = false;
  public iconClass: string = '';
  public customIcon: string = '';
  //audio
  public isAudio: boolean = true;
  public audioSrc: string = '';

  constructor(
    tag: number,
    label: string,
    isRequired: boolean,
    inputType: InputType
  ) {
    this.tag = tag;
    this.label = label;
    this.isRequired = isRequired;
    this.inputType = inputType;
  }
}
