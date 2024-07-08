import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  panelOpenState = false;
  showMore = false;
  show = 8;
  constructor() { }

  ngOnInit(): void {
  }
   // Liste des FAQ
   faqs = [
    { question: "Question 1", reponse: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil reprehenderit aliquid ducimus fugiat sequi blanditiis nobis ut commodi praesentium consequuntur dolorem enim dolor natus assumenda vel, sed facere, asperiores eius." },
    { question: "Question 2", reponse: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." },
    { question: "Question 3", reponse: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." },
    { question: "Question 4", reponse: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil reprehenderit aliquid ducimus fugiat sequi blanditiis nobis ut commodi praesentium consequuntur dolorem enim dolor natus assumenda vel, sed facere, asperiores eius." },
  ]


}
