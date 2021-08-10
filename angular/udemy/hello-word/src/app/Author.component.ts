import { Component } from "@angular/core";

@Component({

    selector: 'Author',
    template: `
    <ul>
    <li *ngFor="let list of lists"> {{list}} </li>
    </ul>
    `
})

export class ListOfAuthorComponent{
    lists = ['Animesh', 'Ankita', 'Asok', 'Aseem'];
}