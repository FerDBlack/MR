  import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
  import {TableType} from "../../interfaces/tableType.interface";
  import {ClientType} from "../../interfaces/clientType.interface";
  import {ActivatedRoute, Route, Router} from "@angular/router";


  @Component({
    selector: 'app-tables-map',
    templateUrl: './tables-map.component.html',
    styleUrls: ['./tables-map.component.css']
  })
  export class TablesMapComponent implements  OnChanges {

    @Input() tablesFiltered: TableType[] = [];
    @Input() unit: string = 'px';
    @Input() currentClient?: ClientType;
    @Input() newClient?: ClientType;
    @Input() dateSelected!: Date

    currentTable?: TableType;

    constructor(
    private _router: Router
    ) {

    }

    ngOnChanges(changes: SimpleChanges): void {

      console.log("CURRENT CLIENT", this.newClient)
    }

    makeReserve(currentTable: TableType) {

      this.currentTable = currentTable;
      if (this.currentClient && this.currentClient.id) {

        this._router.navigate(['/reserve-page', this.currentClient.id], {
          queryParams: {
            currentClient: JSON.stringify(this.currentClient),
            tableSelected: JSON.stringify(this.currentTable),
            dateSelected: JSON.stringify(this.dateSelected)
          }
        });
      } else {
        console.log("Error", this.newClient)
      }
    }


  }
