import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navigator",
  templateUrl: "./navigator.component.html",
  styleUrls: ["./navigator.component.css"],
})
export class NavigatorComponent implements OnInit {
  collapsed = true;
  names = [
    "God Puneet",
    "Legend KK",
    "Pro Chirag",
    "Ultimate Bhargav",
    "Rich Niral",
    "Brahma Prashant",
    "One Above All Yogesh",
    "Great Chotu",
    "Noob Anshul",
    "Netawant",
  ];
  caption = [
    `God`,
    `Pedophile`,
    `(pro) => { 
      return Paneer;
    }`,
    `Banker`,
    `Richie Rich`,
    `Swap()`,
    `Joint Man`,
    `Chotu`,
    `Noob`,
    `Netawant`,
  ];
  images = [
    "god-puneet.jpg",
    "legend-kk.jpg",
    "pro-chirag.jpg",
    "ultimate-bhargav.jpg",
    "rich-niral.jpg",
    "brahma-prashant.jpg",
    "one-above-all.jpg",
    "great-chotu.jpg",
    "noob-anshul.jpg",
    "netawant.jpg",
  ];

  constructor() {}

  ngOnInit(): void {}
}
