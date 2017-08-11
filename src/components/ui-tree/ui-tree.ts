import { Component, Input } from '@angular/core';

/**
 * Generated class for the UiTreeComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'ui-tree',
  templateUrl: 'ui-tree.html'
})

// @Component({
//   selector: "ui-tree",
//   template: `
//     <div class="just-padding" *ngIf="items.length">
//       <div class="list-group list-group-root"  class="main-list" *ngFor="let item of items" (click)="clickItem(item)">
//         <a class="list-group-item list-group-item-action">
//           <i class="fa fa-caret-right" *ngIf="!item.expand && item[key].length"></i>
//           <i class="fa fa-caret-down" *ngIf="item.expand && item[key].length"></i>
//           &nbsp;
//           {{item.accountno}}
//           &nbsp;
//           {{item.name}} 
//         </a>
//           <ui-tree *ngIf="item[key].length && item.expand == true" [key]="key" [data]="item[key]"></ui-tree>
//       </div>
//     </div>
//   `,
//   styleUrls: ['./ui-tree.scss']
// })
// export class UiTree {
//   @Input('data') items: Array<Object>;
//   @Input('key') key: string;

//   clickItem(item) {
//     window.event.stopPropagation();
//     item.expand = item.expand ? false : true;
//   }
// }
export class UiTreeComponent {

  @Input('data') items: Array<Object>;
  @Input('key') key: string;
  @Input('selectItem') callback: any;
  clickItem(item) {
    window.event.stopPropagation();
    item.expand = item.expand ? false : true;
    this.callback = item;
  }

}
