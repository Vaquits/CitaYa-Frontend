import { Component, OnInit } from '@angular/core';

interface DocumentType {
  id: number;
  shortName: string;
}

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  documentTypes: DocumentType[] = [
    { id: 0, shortName: 'CC' },
    { id: 1, shortName: 'TI' },
    { id: 2, shortName: 'RC' },
    { id: 3, shortName: 'PS' }
  ]

}
