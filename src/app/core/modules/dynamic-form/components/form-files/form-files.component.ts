import { UploadOutput, UploadInput, UploadFile, humanizeBytes } from 'ngx-uploader';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from './../../models/field-config.interface';
import { Field } from './../../models/field.interface';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormData } from './../../models/form-data.interface';

@Component({
  selector: 'app-form-files',
  templateUrl: './form-files.component.html',
  styleUrls: ['./form-files.component.scss']
})

export class FormFilesComponent implements Field {
  public config: FieldConfig;
  public group: FormGroup;
  public type: string;
  public formData: FormData;
  public files: UploadFile[];
  public uploadInput: EventEmitter<UploadInput>;
  public humanizeBytes: Function;
  public dragOver: boolean;

  constructor() {
    this.formData = {
      concurrency: 1,
      autoUpload: false,
      verbose: true
    };

    this.files = [];
    this.uploadInput = new EventEmitter<UploadInput>();
    this.humanizeBytes = humanizeBytes;
  }

  public onUploadOutput(output: UploadOutput): void {
    console.log(output);

    if (output.type === 'allAddedToQueue') {
      const event: UploadInput = {
        type: 'uploadAll',
        url: 'http://ngx-uploader.com/upload',
        method: 'POST',
        data: { foo: 'bar' },
        concurrency: this.formData.concurrency
      };

      this.uploadInput.emit(event);
    } else if (output.type === 'addedToQueue'  && typeof output.file !== 'undefined') {
      this.files.push(output.file);
    } else if (output.type === 'uploading' && typeof output.file !== 'undefined') {
      const index = this.files.findIndex((file) => typeof output.file !== 'undefined' && file.id === output.file.id);
      this.files[index] = output.file;
    } else if (output.type === 'removed') {
      this.files = this.files.filter((file: UploadFile) => file !== output.file);
    } else if (output.type === 'dragOver') {
      this.dragOver = true;
    } else if (output.type === 'dragOut') {
      this.dragOver = false;
    } else if (output.type === 'drop') {
      this.dragOver = false;
    }
  }

  public startUpload(): void {
    const event: UploadInput = {
      type: 'uploadAll',
      url: 'http://ngx-uploader.com/upload',
      method: 'POST',
      data: { foo: 'bar' },
      concurrency: this.formData.concurrency
    };

    this.uploadInput.emit(event);
  }

  public cancelUpload(id: string): void {
    this.uploadInput.emit({ type: 'cancel', id });
  }

  public removeFile(id: string): void {
    this.uploadInput.emit({ type: 'remove', id });
  }

  public removeAllFiles(): void {
    this.uploadInput.emit({ type: 'removeAll' });
  }
}
