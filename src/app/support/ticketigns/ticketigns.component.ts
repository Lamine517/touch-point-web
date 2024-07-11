import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
declare var MediaRecorder: any;

@Component({
  selector: 'app-ticketigns',
  templateUrl: './ticketigns.component.html',
  styleUrls: ['./ticketigns.component.css'],
})
export class TicketignsComponent implements OnInit {
  mediaRecorder: any;
  chunks: any[] = [];
  audioFiles: any[] = [];
  isFormVisible = false;
  isDetailVisible = false;

  constructor(
    private router: Router,
    private cd: ChangeDetectorRef,
    private dom: DomSanitizer
  ) {}
  ngOnInit() {
    navigator.mediaDevices.getUserMedia({ audio: true }).then(
      (stream: any) => {
        console.log(stream);
        this.mediaRecorder = new MediaRecorder(stream);
        this.mediaRecorder.onstop = (e: any) => {
          console.log('data available after MediaRecorder.stop() called.');
          // audio.controls = true;
          var blob = new Blob(this.chunks, { type: 'audio/ogg; codecs=opus' });
          this.chunks = [];
          var audioURL = URL.createObjectURL(blob);
          // audio.src = audioURL;
          this.audioFiles.push(this.dom.bypassSecurityTrustUrl(audioURL));
          console.log(audioURL);
          console.log('recorder stopped');
          this.cd.detectChanges();
        };
        this.mediaRecorder.ondataavailable = (e: any) => {
          this.chunks.push(e.data);
        };
      },
      () => {
        alert('Error capturing audio.');
      }
    );
  }

  detailTicket() {
    this.isDetailVisible = !this.isDetailVisible;
    if (this.isDetailVisible) {
      this.isFormVisible = false;
    }
  }

  openTicket() {
    this.isFormVisible = !this.isFormVisible;
    if (this.isFormVisible) {
      this.isDetailVisible = false;
    }
  }

  startRecording() {
    this.mediaRecorder.start();
    console.log(this.mediaRecorder.state);
    console.log('recorder started');
  }
  stopRecording() {
    this.mediaRecorder.stop();
    console.log(this.mediaRecorder.state);
    console.log('recorder stopped');
  }
}

