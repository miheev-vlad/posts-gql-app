import { Component } from '@angular/core';
import { DropdownItemsInterface } from 'src/app/shared/modules/text-input/components/text-input/text-input.component';

@Component({
  selector: 'app-authorId-search-input',
  templateUrl: './authorId-search-input.component.html',
  styleUrls: ['./authorId-search-input.component.scss'],
})
export class AuthorIdSearchInputComponent {
  dropdownItems: DropdownItemsInterface[] = [
    {
      value: '1',
      name: 'Leanne Graham',
    },
    {
      value: '2',
      name: 'Ervin Howell',
    },
    {
      value: '3',
      name: 'Clementine Bauch',
    },
    {
      value: '4',
      name: 'Patricia Lebsack',
    },
    {
      value: '5',
      name: 'Chelsey Dietrich',
    },
    {
      value: '6',
      name: 'Mrs. Dennis Schulist',
    },
    {
      value: '7',
      name: 'Kurtis Weissnat',
    },
    {
      value: '8',
      name: 'Nicholas Runolfsdottir V',
    },
    {
      value: '9',
      name: 'Glenna Reichert',
    },
    {
      value: '10',
      name: 'Clementina DuBuque',
    },
  ];
}
