import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class SearchService {

  Movie = [];
  input = "";
  results = [];
  collections = [];
  

  searchShow(){
   let trimmedInput = this.input.trim();


   if(trimmedInput != ""){
     
   

    this.http.get(`http://www.omdbapi.com/?apikey=6f971da7&s=${this.input}`).subscribe((data) =>{
      this.results = data['Search'];
      console.log(this.results);
    });

  }
  }

  favorite(){
    {
      this.collections.push({
        isChecked: false,
        Movie: this.favorite
      });
    }
  }

  movieHeart(id){
    
      
    
 
     this.http.get(`http://www.omdbapi.com/?apikey=6f971da7&i=${id}`).subscribe((data) =>{
       this.Movie = data['results'];
       console.log(this.Movie);
     });
 
   
   }

  constructor(public search: SearchService, public router: Router, public http: HttpClient){
    this.search=search;
    this.router=router;
  }
}
