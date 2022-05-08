import { Component, OnInit } from '@angular/core';

interface DocumentType {
  id: number;
  shortName: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

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
