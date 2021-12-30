import { Component } from '@angular/core';

@Component({
  selector: 'scp-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  mediaItems = [

    {
      url: "https://www.instagram.com/solcpad/",
      src: "assets/img/social-media/instagram.png",
      alt: "Instagram"
    },
    {
      url: "https://www.facebook.com/Solcpad-1500563273513647/",
      src: "assets/img/social-media/facebook.png",
      alt: "Facebook"
    },

    {
      url: "https://www.twitter.com/solcpad",
      src: "assets/img/social-media/twitter.png",
      alt: "Twitter"
    },

    {
      url: "https://www.youtube.com/channel/UC_FrXqwFU5WDzvwg8B_M-PQ",
      src: "assets/img/social-media/youtube.png",
      alt: "YouTube"
    },
    {
      url: "https://www.linkedin.com/in/solcpad/",
      src: "assets/img/social-media/linkedin.png",
      alt: "Linkedin"
    }

  ];

}
