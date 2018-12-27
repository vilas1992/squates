import { Component, OnInit, Input, SimpleChanges, SimpleChange} from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  @Input() albumsList : any[];
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    debugger;
    const name: SimpleChange = changes.albumsList;
    this.albumsList = name.currentValue;
  }

}
