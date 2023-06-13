import {Component} from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  title = 'Page Title';
  courses = ['Angular', 'React', 'Vue', 'Svelte'];
}
