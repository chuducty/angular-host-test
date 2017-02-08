import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-read-text-file-test',
  templateUrl: './read-text-file-test.component.html',
  styleUrls: ['./read-text-file-test.component.css']
})
export class ReadTextFileTestComponent implements OnInit {
  text: String;
  test2: String = '<script>alert(123)</script>';
  @ViewChild('textArea') textArea;
  spy: String;
  constructor() {

  }
  changeEvent(e){
    //console.log('ahihi');
    //console.log(e.target);
    var file = e.target.files[0];
    //console.log('test',file);
    var reader = new FileReader();
    reader.onload = (e) => {
        console.log(e);
        this.text = reader.result;
    };
    reader.readAsText(file);

  }
  saveFile(e){
    var textToWrite = this.spy;
    // console.log(textToWrite);
    var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
    

    ///////
  }
  ngOnInit() {
  }

}
