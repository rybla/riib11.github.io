var feed = document.getElementsByClassName('feed')[0];

function createPost(post_data) {
  console.log("generating post: " + post_data['title']);

  let post_wrapper = document.createElement('div');
  post_wrapper.classList.add('post-wrapper');

  let post = document.createElement('div');
  post.classList.add('post');
  post_wrapper.appendChild(post);

  let post_title = document.createElement('a');
  post_title.classList.add('post-title')
  post_title.innerHTML = post_data['title'];
  post_title.href = 'article/' + post_data['href'];
  post.appendChild(post_title)

  let post_date = document.createElement('div');
  post_date.classList.add('post-date');
  post_date.innerHTML = post_data['date'];
  post.appendChild(post_date);

  let post_divider = document.createElement('div');
  post_divider.classList.add('post-divider');
  post.appendChild(post_divider);

  let post_abstract = document.createElement('div');
  post_abstract.classList.add('post-abstract');
  post_abstract.innerHTML = post_data['abstract'];
  post.appendChild(post_abstract);

  feed.appendChild(post_wrapper);
}

doXMLHttpRequest('article/posts.json', function(responseText) {
  let posts = JSON.parse(responseText);
  for (var i = 0; i < posts.length; i ++) {
    let post_data = posts[i];
    createPost(post_data);
  }
});
