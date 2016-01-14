///**
// * Created by alisabelousova on 04/01/16.
// */
//
//var keystone = require('keystone');
//var async = require('async');
//
//exports = module.exports = function(req, res) {
//
//	var view = new keystone.View(req, res);
//	var locals = res.locals;
//	
//	locals.section = 'gallery';
//	locals.filters = {
//		gallery: req.params.gallery
//	};
//	locals.data = {
//		galleries: []
//	};
//
//	// Load all categories
//	view.on('init', function(next) {
//
//		keystone.list('PostCategory').model.find().sort('name').exec(function(err, results) {
//
//			if (err || !results.length) {
//				return next(err);
//			}
//
//			locals.data.categories = results;
//
//			// Load the counts for each category
//			async.each(locals.data.categories, function(category, next) {
//
//				keystone.list('Post').model.count().where('categories').in([category.id]).exec(function(err, count) {
//					category.postCount = count;
//					next(err);
//				});
//
//			}, function(err) {
//				next(err);
//			});
//
//		});
//
//	});
//
//	// Load the current category filter
//	view.on('init', function(next) {
//
//		if (req.params.category) {
//			keystone.list('PostCategory').model.findOne({ key: locals.filters.category }).exec(function(err, result) {
//				locals.data.category = result;
//				next(err);
//			});
//		} else {
//			next();
//		}
//
//	});
//
//	// Load the posts
//	view.on('init', function(next) {
//
//		var q = keystone.list('Gallery').paginate({
//			page: req.query.page || 1,
//			perPage: 10,
//			maxPages: 10
//		})
//			.where('state', 'published')
//			.sort('-publishedDate')
//			.populate('author categories');
//
//		if (locals.data.category) {
//			q.where('categories').in([locals.data.category]);
//		}
//
//		q.exec(function(err, results) {
//			locals.data.posts = results;
//			next(err);
//		});
//
//	});
//
//	// Render the view
//	view.render('gallery');
//
//};
//
//// Load the current post
//view.on('init', function(next) {
//
//	var q = keystone.list('Gallery').model.findOne({
//		slug: locals.filters.post
//	});
//
//	q.exec(function(err, result) {
//		locals.data.post = result;
//		next(err);
//	});
//
//});
