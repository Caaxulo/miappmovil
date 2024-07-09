import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sims',
  templateUrl: './sims.page.html',
  styleUrls: ['./sims.page.scss'],
})
export class SimsPage implements OnInit {
  username: string = '';
  videoUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer, private authService: AuthService) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/qamZkSA4oxU?si=D9XpsdQ8tLq9PdKL");
  }

  showVideo(video: string) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(video);
  }

  ngOnInit() {
    this.username = this.authService.username;
  }
}

