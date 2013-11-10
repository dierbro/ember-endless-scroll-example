var PostsIndexController = Ember.ArrayController.extend({
  noMoreItems: function(){
    return this.get("paginationInfo.currentPage")>=this.get("paginationInfo.totalPages");
  }.property("content.[]"),
    
  paginationInfo: function(){
    return this.store.metadataFor("post");
  }.property("content"),

  actions:{
    more: function(){
      if(this.get("noMoreItems"))
        return;

      var self = this;
      self.set('isLoadingMore', true);
      this.store.find('post', {page: (this.get("paginationInfo.currentPage")+1)}).then(
        function(){
          self.set('isLoadingMore', false);
        });
    }
  }
});

export default PostsIndexController;
