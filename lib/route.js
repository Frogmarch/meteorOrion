FlowRouter.route('/', {
  action: function(){
    BlazeLayout.render('home');
  }
});

FlowRouter.route('/posts', {
	action: function(){
		BlazeLayout.render('posts');
	}
})