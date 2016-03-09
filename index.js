var pangunode = require('pangunode');

hexo.extend.filter.register('before_post_render', function(data) {
  data.title = pangunode(data.title);
  data.content = pangunode(data.content);
  data.content = data.content.replace(/({%[^%{}]*?"[^%{}]*"[^%{}]*?%})/g,
                                      function(m){
                                        return m.replace(/({%[^%{}]*?")([^%{}]*?)("[^%{}]*?%})/,
                                                         function(match, b, s, a){
                                                           return b + s.replace(/[\s]/g, '')+a;
                                                         }
                                                        );
                                      }
                                     );
})
