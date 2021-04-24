import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, ViewChild, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Movie } from '../../models/movie';
import Utils from 'src/app/app.utils';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'gdp-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss'],
})
export class MovieFormComponent implements OnInit, OnDestroy, OnChanges {

  form: FormGroup;
  @Input() movie: Movie;
  @Output() onSubmit = new EventEmitter<Movie>();

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.form = this.createForm(this.movie);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.movie.firstChange) {
      this.form = this.createForm(this.movie);
    }
  }

  createForm(movie: Movie) {
    // console.log('createForm',this.movie)
    return this.fb.group({
      name: [movie ? movie.name : '', Validators.required],
      description: [movie ? movie.description : '', Validators.required],
      premiereTimestamp: [movie ? movie.premiereTimestamp : '1586821347000', Validators.required],
      available: [movie ? movie.available : false, Validators.required],
    })
  }

  submit() {
    if (this.form.valid) {
      this.onSubmit.emit({ ...(this.movie ? this.movie : { id: Utils.uuid() }), ...this.form.getRawValue() })
    }
  }

  ngOnDestroy(): void {
    this.movie = undefined;
  }

}
