import { Component, OnInit } from '@angular/core';
import { BlogService } from '../Service/Blog/blog.service';
import { Router } from '@angular/router'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { CategoriesService } from '../Service/Categories/categories.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogData: any = [];

  constructor(
    public _BlogService: BlogService,
    public router: Router,
    public _CategoriesService:CategoriesService
  ) { }

  ngOnInit(): void {
    this._BlogService.getAllBlogs();
    setTimeout(() => {
      this.createBlogProperties();
    }, 4000);
  }

  changeRoute(blogURL:string) {
    this.router.navigate(['/BlogContent/'+blogURL])
  }


  createBlogProperties() {
    console.log("Blog Properties")
    var keywordArray = [];
    const re = /\s*(?:;|$)\s*/
    this.blogData = this._BlogService.AllBlogsData
    console.log("BlogData #458487 :", this.blogData)
    for (var i = 0; i < this.blogData.length; i++) {
      keywordArray = [];
      console.log(this.blogData[i])
      keywordArray = this.blogData[i].keyword.split(re)
      this.blogData[i].keyword = keywordArray;
      console.log("Blog With Keyword Array : ", this.blogData[i])
    }
  }


}
