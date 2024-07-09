import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-farmingsimulator',
  templateUrl: './farmingsimulator.page.html',
  styleUrls: ['./farmingsimulator.page.scss'],
})
export class FarmingsimulatorPage implements OnInit {
  username: string = '';
  videoUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer, private authService: AuthService) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/eszqWN9OrNo?si=pUIWFQ-XLBIZZysl&t=53");
  }

  showVideo(video: string) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(video);
  }

  ngOnInit() {
    this.username = this.authService.username;
  }
}
