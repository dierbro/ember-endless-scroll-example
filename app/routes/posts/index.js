var PostsIndexRoute = Ember.Route.extend({
  model: function(params){
    return this.store.find('post');
  },
});

export default PostsIndexRoute;

