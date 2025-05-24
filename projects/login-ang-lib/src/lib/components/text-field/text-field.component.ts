import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-text-field',
  imports: [FormsModule, CommonModule],
  templateUrl: './text-field.component.html',
  styleUrl: './text-field.component.scss',
})
export class TextFieldComponent {
  @Input('textFieldModel') textFieldModel: TextField | null = null;
  @Output() eventEmitter = new EventEmitter();
  @Output() iconEventEmitter = new EventEmitter();
  titleText: string = '';
  onEnter() {
    if (!this.textFieldModel!['isDisabled']) {
      this.soundEffect();
      this.isValid();
      this.eventEmitter.emit(this.textFieldModel);
    }
  }
  onIconClick() {
    if (!this.textFieldModel!['isDisabled']) {
      this.soundEffect();
      this.iconEventEmitter.emit(this.textFieldModel);
    }
  }

  isValid() {
    const pattern = this.textFieldModel?.['inputContent'];
    const value = this.textFieldModel?.['value'];
    const key = Object.entries(InputContent).find(([_, v]) => v === pattern)?.[0];
    if (pattern && value) {
      const regex = new RegExp(pattern);
      if (regex.test(value)) {
        this.titleText = '';
      } else {
        this.titleText = `Invalid ${key} Input!!!`;
      }
    }
  }

  soundEffect() {
    const audio = document.getElementById('clickSound') as HTMLAudioElement;
    if (audio && this.textFieldModel!["isAudio"]) {
      audio.currentTime = 0;
      audio.play();
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
  public audioSrc: string = 'assets/login-ang-lib/audios/input-audio.mp3';

  constructor(tag: number, label: string, isRequired: boolean, inputType: InputType) {
    this.tag = tag;
    this.label = label;
    this.isRequired = isRequired;
    this.inputType = inputType;
  }
}
