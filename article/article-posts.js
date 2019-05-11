var posts = [
  {
    'title': 'This is a post',
    'date': '11-05-2019',
    'abstract': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    'title': 'This is a post',
    'date': '11-05-2019',
    'abstract': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    'title': 'This is a post',
    'date': '11-05-2019',
    'abstract': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    'title': 'This is a post',
    'date': '11-05-2019',
    'abstract': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    'title': 'This is a post',
    'date': '11-05-2019',
    'abstract': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    'title': 'This is a post',
    'date': '11-05-2019',
    'abstract': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
];

var feed = document.getElementsByClassName('feed')[0];

function createPost(post_data) {
  let post_wrapper = document.createElement('div');
  post_wrapper.classList.add('post-wrapper');

  let post = document.createElement('div');
  post.classList.add('post');
  post_wrapper.appendChild(post);

  let post_title = document.createElement('div');
  post_title.classList.add('post-title')
  post_title.innerHTML = post_data['title'];
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

// create all the posts

for (var i = 0; i < posts.length; i ++) {
  let post_data = posts[i];
  createPost(post_data);
}
