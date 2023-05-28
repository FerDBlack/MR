import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {TableType} from "../../interfaces/tableType.interface";
import {ClientType} from "../../interfaces/clientType.interface";
import {ActivatedRoute, Route, Router} from "@angular/router";


@Component({
  selector: 'app-tables-map',
  templateUrl: './tables-map.component.html',
  styleUrls: ['./tables-map.component.css']
})
export class TablesMapComponent implements OnChanges {

  @Input() tables: TableType[] = [];
  @Input() unit: string = 'px';
  @Input() currentClient?:ClientType;
  currentTable?:TableType;

constructor(private _router:Router) {
}
  ngOnChanges(changes: SimpleChanges): void {

    console.log("componente tables-map",  this.currentClient)
  }

    makeReserve(currentTable: TableType) {
      console.log("componente tables-map",  currentTable)

      this.currentTable = currentTable;
      this._router.navigate(['/reserve-page', this.currentClient?.id], {
        queryParams: {
          currentClient: JSON.stringify(this.currentClient),
          tableSelected: JSON.stringify(this.currentTable)
        }
      });
    }

}
