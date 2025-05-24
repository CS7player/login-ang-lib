import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input('buttonModel') buttonModel: Button | null = null;
  @Output() eventEmitter = new EventEmitter();
  onClick() {
    this.soundEffect();
    this.eventEmitter.emit(this.buttonModel);
  }

  soundEffect() {
    const audio = document.getElementById('clickSound') as HTMLAudioElement;
    if (audio && this.buttonModel!['isAudio']) {
      audio.currentTime = 0;
      audio.play();
    }
  }
}

export enum ButtonTheme {
  primary = 'primary',
  success = 'success',
  delete = 'delete',
}

export class Button {
  public tag: number = 0;
  public text: string = '';
  public isDisabled: boolean = false;
  public iconClass: string = '';
  public buttonTheme: ButtonTheme = ButtonTheme.primary;
  public customButton: string = '';
  public title: string = '';
  public isAudio: boolean = true;
  public audioSrc: string = 'assets/login-ang-lib/audios/button-audio.mp3';
  constructor(tag: number, text: string) {
    this.tag = tag;
    this.text = text;
  }
}
