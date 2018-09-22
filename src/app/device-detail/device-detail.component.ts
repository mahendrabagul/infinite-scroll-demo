import { Component, OnInit, Input } from '@angular/core';
import { tap, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { PaginationInstance } from 'ngx-pagination';

interface IServerResponse {
  devices: string[];
  total: number;
}

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css']
})
export class DeviceDetailComponent implements OnInit {
  p = 1;
  devices: any[];
  loading: boolean;
  public filter = '';
  public maxSize = 7;
  public directionLinks = false;
  public autoHide = false;
  public responsive = false;
  public config: PaginationInstance = {
    id: 'advanced',
    itemsPerPage: 10,
    currentPage: 1
  };
  public labels1: any = {
    previousLabel: '',
    nextLabel: '',
    screenReaderPaginationLabel: 'Pagination',
    screenReaderPageLabel: 'page',
    screenReaderCurrentLabel: `You're on page`
  };
  public labels3: any = {
    previousLabel: '',
    nextLabel: '',
    screenReaderPaginationLabel: 'Pagination',
    screenReaderPageLabel: 'page',
    screenReaderCurrentLabel: `You're on page`
  };
  public labels2: any = {
    previousLabel: 'Previous',
    nextLabel: 'Next',
    screenReaderPaginationLabel: 'Pagination',
    screenReaderPageLabel: 'page',
    screenReaderCurrentLabel: `You're on page`
  };

  onPageChange(number: number) {
    console.log('change to page', number);
    this.config.currentPage = number;
  }

  constructor() {
    this.devices =
      [
        {
          '_id': {
            '$oid': '5b39eb1e1ad8b6634b7ed52c'
          },
          'deviceId': 'AF01',
          'timestamp': '2018-06-09T05:18:43.825Z',
          'moisture': 94
        },
        {
          '_id': {
            '$oid': '5b39eb1e1ad8b6634b7ed52b'
          },
          'deviceId': 'AF01',
          'timestamp': '2018-06-09T05:17:31.402Z',
          'moisture': 94
        },
        {
          '_id': {
            '$oid': '5b39eb1e1ad8b6634b7ed52a'
          },
          'deviceId': 'AF01',
          'timestamp': '2018-06-09T05:16:18.960Z',
          'moisture': 94
        },
        {
          '_id': {
            '$oid': '5b39eb1e1ad8b6634b7ed52f'
          },
          'deviceId': 'AF01',
          'timestamp': '2018-06-09T05:15:06.522Z',
          'moisture': 94
        },
        {
          '_id': {
            '$oid': '5b39eb1e1ad8b6634b7ed528'
          },
          'deviceId': 'AF01',
          'timestamp': '2018-06-09T05:13:54.183Z',
          'moisture': 94
        },
        {
          '_id': {
            '$oid': '5b39eb1e1ad8b6634b7ed527'
          },
          'deviceId': 'AF01',
          'timestamp': '2018-06-09T05:12:41.739Z',
          'moisture': 94
        },
        {
          '_id': {
            '$oid': '5b39eb1e1ad8b6634b7ed526'
          },
          'deviceId': 'AF01',
          'timestamp': '2018-06-09T05:11:29.326Z',
          'moisture': 94
        },
        {
          '_id': {
            '$oid': '5b39eb1e1ad8b6634b7ed525'
          },
          'deviceId': 'AF01',
          'timestamp': '2018-06-09T05:10:16.888Z',
          'moisture': 94
        },
        {
          '_id': {
            '$oid': '5b39eb1e1ad8b6634b7ed524'
          },
          'deviceId': 'AF01',
          'timestamp': '2018-06-09T05:09:04.489Z',
          'moisture': 94
        },
        {
          '_id': {
            '$oid': '5b39eb1e1ad8b6634b7ed523'
          },
          'deviceId': 'AF01',
          'timestamp': '2018-06-09T05:07:52.049Z',
          'moisture': 94
        }
      ];
  }

  ngOnInit() {
    this.getPage(1);
  }

  getPage(page: number) {
  }
}
