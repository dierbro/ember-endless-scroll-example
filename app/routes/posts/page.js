var PostsPageRoute = Ember.Route.extend({
  model: function(params){
    return this.store.find('post', {page: params.page});
  },
  actions: {
    goToPage: function(page){
      this.transitionTo('posts.page', page);
    }  
  }
});

export default PostsPageRoute;
