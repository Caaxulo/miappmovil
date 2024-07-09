import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-horizon',
  templateUrl: './horizon.page.html',
  styleUrls: ['./horizon.page.scss'],
})
export class HorizonPage implements OnInit {
  username: string = '';
  videoUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer, private authService: AuthService) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/yKLwbkbWQpc?si=qOHR88VZAM0WpHrj");
  }

  showVideo(video: string) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(video);
  }

  ngOnInit() {
    this.username = this.authService.username;
  }
}
