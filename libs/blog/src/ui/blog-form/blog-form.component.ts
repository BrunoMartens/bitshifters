import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { marked } from 'marked'
import { Blog } from '../../domain/blog';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'bitshifters-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss'],
})
export class BlogFormComponent implements OnInit {
  innerHtml?: string;

  @ViewChild('preview')
  previewEL!:ElementRef;

  contentControl = new FormControl();
  form = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    tags: new FormControl(),
    month: new FormControl(new Date().getMonth() + 1),
    year: new FormControl(new Date().getFullYear()),
    content: this.contentControl
  })

  constructor(private sanitizer:DomSanitizer) {}

  ngOnInit(): void {
    this.contentControl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe((c: string) => {
      const md = marked.setOptions({mangle: false, headerIds: false});
      this.previewEL.nativeElement.innerHTML = (this.sanitizer.bypassSecurityTrustHtml(md.parse(c)) as any).changingThisBreaksApplicationSecurity;
    })
  }


  getValues(): Blog {
    const values = this.form.getRawValue();
    return {
      title: values.title,
      description: values.description,
      tags: values.tags,
      month: values.month as number,
      year: values.year as number,
      content: values.content
    };
  }
}
