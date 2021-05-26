import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { NavigatorComponent } from "../navigator/navigator.component";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent implements OnInit {
  item = "";
  caption = "";
  constructor(private route: Router, nav: NavigatorComponent) {
    //console.log(decodeURI(route.url.split('/')[2].toString()));
    route.events.subscribe((val) => {
      // see also .valueOf().snapshot.url[0].path
      if (val instanceof NavigationEnd) {
        this.item =
          nav.images[nav.names.indexOf(decodeURI(val.url.split("/")[2]))];
        this.caption =
          nav.caption[nav.names.indexOf(decodeURI(val.url.split("/")[2]))];
      }
    });
  }

  ngOnInit(): void {
    //this.item = this.route.snapshot.children[0].url[0].path;
  }
}
