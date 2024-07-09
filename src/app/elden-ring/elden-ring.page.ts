import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-elden-ring',
  templateUrl: './elden-ring.page.html',
  styleUrls: ['./elden-ring.page.scss'],
})
export class EldenRingPage implements OnInit {
  username: string = '';
  videoUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer, private authService: AuthService) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/K-T-kPvlZt0?si=3sz9SvDTz1_Tv20g");
  }

  showVideo(video: string) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(video);
  }

  ngOnInit() {
    this.username = this.authService.username;
  }
}
