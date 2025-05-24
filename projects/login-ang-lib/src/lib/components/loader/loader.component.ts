import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-loader',
  imports: [],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
})
export class LoaderComponent {
  @Input('switch') switch: boolean = false;
}
