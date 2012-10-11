// a parent constructor
function Article() {
  this.tags = ['js', 'css'];
}
var article = new Article();

// a blog post inherits from an article object
// via the classical pattern #1
function BlogPost() {
}
BlogPost.prototype = article;
var blog = new BlogPost();

// a static page inherits from article
// via the rented constructor pattern
function StaticPage() {
  Article.apply(this);
}

var page = new StaticPage();

console.log(article.hasOwnProperty('tags'));
console.log(blog.hasOwnProperty('tags'));
console.log(page.hasOwnProperty('tags'));

blog.tags.push('blog');
page.tags.push('page');
console.log(article.tags);
