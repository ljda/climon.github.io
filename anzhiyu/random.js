var posts=["2025/04/14/hello-world/","2025/04/14/d”失败/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };