import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  public reviewsProgressData = [
    { number: 56, star: 5 },
    { number: 14, star: 4 },
    { number: 4, star: 3 },
    { number: 0, star: 2 },
    { number: 0, star: 1 }
  ];
  color = false;
  selectedDate;
  onSelect() {
    this.color = !this.color;
    this.selectedDate = !this.selectedDate
  };
  nameColor = false;
  onSelectName() {
    this.nameColor = !this.nameColor
  };
  reviewsUsersCardData = [
    {
      img: '../../../assets/images/images (1).jpg', fullName: 'Name Name', online: '5', text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.Ratione,earum aliquam corporis excepturi possimus?`,
    }, {
      img: '../../../assets/images/foto-cbouvier.74c80c8a.jpg', fullName: 'Name Name', online: '5', text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.Ratione,earum aliquam corporis excepturi possimus?`,
    }, {
      img: '../../../assets/images/nate_munger.png', fullName: 'Name Name', online: '5', text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.Ratione,earum aliquam corporis excepturi possimus?`,
    },
    {
      img: '../../../assets/images/images.jpg', fullName: 'Name Name', online: '5', text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.Ratione,earum aliquam corporis excepturi possimus?`,
    },


  ]
  constructor() { }

  ngOnInit(): void {
  }

}
