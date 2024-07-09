import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-finalfantasy',
  templateUrl: './finalfantasy.page.html',
  styleUrls: ['./finalfantasy.page.scss'],
})
export class FinalfantasyPage implements OnInit {
  username: string = '';
  videoUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer, private authService: AuthService) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/43Jt-GG1PFA?si=uoukuI3Lz99hLFf1");
  }

  showVideo(video: string) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(video);
  }

  ngOnInit() {
    this.username = this.authService.username;
  }
}
