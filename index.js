'use strict';
hexo.extend.helper.register('user_post_count', function(args) {
    var super_hexo = hexo.locals.toObject();
    //DEBUG console.log(Object.keys(super_hexo.posts.data))
    var post_count = 0
    for(let i in Object.values(super_hexo.posts.data)) {
        const args_author = '' + args
        const author =  Object.values(super_hexo.posts.data[i]['author']).join("")
        if (args_author == Object.values(super_hexo.posts.data[i]['author']).join("")){
            post_count = post_count + 1
        }
        //DEBUG console.log(args_author, author)
        //DEBUG console.log(Object.values(super_hexo.posts.data[i]['author']).join(""));
    }
    //DEBUG console.log(post_count)
    return post_count
});

hexo.extend.tag.register(
    'user_post_count_md',
    function (args) {
        return args[0]
    })