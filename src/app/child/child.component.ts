import { Component, OnInit , Input,SimpleChanges,SimpleChange ,OnChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges,OnInit {

  @Input() name: string;
  private _name: string;


  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    const name: SimpleChange = changes.name;
    console.log('prev value: ', name.previousValue);
    console.log('got name: ', name.currentValue);
    this._name = name.currentValue.toUpperCase();
  }
  
  ngOnInit() {
    console.log('on init');
    console.log(this.name);
  }


}
