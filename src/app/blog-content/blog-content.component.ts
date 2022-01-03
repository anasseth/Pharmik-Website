import { Component, OnInit } from '@angular/core';
import { BlogService } from '../Service/Blog/blog.service';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.scss']
})
export class BlogContentComponent implements OnInit {
  blogTitle: any;
  blogData: any;
  blogKeyword: any = [];

  constructor(
    public _BlogService: BlogService,
    public router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.blogTitle = this.activatedRoute.snapshot.paramMap.get('title')

    console.log("Activated Blog : ", this.blogTitle)

    this._BlogService.getAllBlogs();

    this.blogData = this._BlogService.AllBlogsData.filter((x: any) => x.urlParameter.toString() == this.blogTitle.toString())[0]

    console.log("Blog Data : ", this.blogData)

    if (this.blogData == null || this.blogData == undefined) {
      this.router.navigate(['/Blog'])
    }
    this.setBlogContent()
  }

  setBlogContent() {
    const re = /\s*(?:;|$)\s*/
    // this.blogKeyword = this.blogData.keyword.split(re)
    // console.log("Keyword Data :", this.blogKeyword)

    this.blogKeyword = this.blogData.keyword
    console.log("Keyword Data :", this.blogKeyword)

    var BlogContent = document.getElementById("BlogContent") as HTMLElement
    BlogContent.innerHTML = "";
    BlogContent.innerHTML = this.blogData.content;
  }




}
