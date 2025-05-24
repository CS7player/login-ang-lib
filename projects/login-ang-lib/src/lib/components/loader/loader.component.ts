import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-loader',
  imports: [],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
})
export class LoaderComponent {
  @Input('ip_mdl') ip_mdl: UILoader | null = null;
}

export class UILoader {
  public isLoader: boolean = false;
}
