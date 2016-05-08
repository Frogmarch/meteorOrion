Meteor.publish('postsCollections', function(){
	return Posts.find({}, {field: {body: 0}});
});