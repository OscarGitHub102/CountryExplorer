import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country-service';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-component',
  imports: [FormsModule, RouterLink],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss',
})

export class HeaderComponent implements OnInit {

  private names!: string[];
  suggestions: string[] = [];
  searchBox: string = '';
  
  constructor(private service: CountryService, private route: Router) {}

  ngOnInit() {
    this.service.countryNameList().subscribe((data: string[]) => {
      this.names = data;
    });
  }

  autocomplete() {

    
    if (this.searchBox.length >= 3) {
      this.suggestions = this.names.filter((name) =>
        name.toLowerCase().includes(this.searchBox.toLowerCase())
      );
      
    } else {
      this.suggestions = [];
    }
  }

  selectCountry(country: string) {
    this.searchBox = country;
    this.suggestions = [];
    this.route.navigate(['country/' + country]);
    this.searchBox = '';
  }

  search() {
    
    let found = this.names.find((name) =>
      name.toLowerCase().includes(this.searchBox.toLowerCase())
    );

    if (found == null) {
      alert('Country not found.');
    } else {
      this.route.navigate(['country/' + found]);
    }
  }

  clearSearch() {
    this.searchBox = '';
    this.suggestions = [];
  }

  hideSuggestions() {
    setTimeout(() => {
      this.suggestions = [];
    }, 150);
  }

}