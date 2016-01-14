var postsWrapper = document.querySelector('.post-list')
var posts = postsWrapper.querySelectorAll('.post.type-post.status-publish')
 
function parsePosts() {
    pos = []
    for (var i = 0; i < posts.length; i++) {
            var post = posts[i];
            var postTitle = post.querySelector('h2 a').textContent;
            var postURL = post.querySelector('h2 a').getAttribute('href');
            pos.push({'postTitle' : postTitle, 'postURL' : postURL});
    }
    
    return pos
}

var postsList = parsePosts();

// This last line enables JavaScript and native code communication.
// webkit.messageHandlers is a global object that facilitates the triggering of callbacks in the native code.
// didGetPosts represents a message with the same name in the native code.
// postMessage passes data through to the callback.
webkit.messageHandlers.didGetPosts.postMessage(postsList);