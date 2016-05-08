Template.postsList.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('postsCollections');
  });
});

Template.postsList.helpers({
  posts: function(){
    return Posts.find({}, {sort: {created: -1}});
  }
});