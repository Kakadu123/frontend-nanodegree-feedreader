/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
	/* This is our first test suite - a test suite just contains
	 * a related set of tests. This suite is all about the RSS
	 * feeds definitions, the allFeeds variable in our application.
	 */
	/* This is our first test - it tests to make sure that the
	 * allFeeds variable has been defined and that it is not
	 * empty. Experiment with this before you get started on
	 * the rest of this project. What happens when you change
	 * allFeeds in app.js to be an empty array and refresh the
	 * page?
	 */
	describe('RSS Feeds', function() {

		it('are defined', function() {
			expect(allFeeds).toBeDefined();
			expect(allFeeds.length).not.toBe(0);
		});

		/* TODO: Write a test that loops through each feed
		 * in the allFeeds object and ensures it has a URL defined
		 * and that the URL is not empty.
		 */

		// Samuel Comment: 
		// Loop through the allFeeds object and determine whether
		// url is defined and is not empty. 
		it('have URL defined and not empty', function() {
			for (var i = allFeeds.length - 1; i >= 0; i--) {
				expect(allFeeds[i].url).toBeDefined();
				expect(allFeeds[i].url).not.toEqual('');
			};
		});

		/* TODO: Write a test that loops through each feed
		 * in the allFeeds object and ensures it has a name defined
		 * and that the name is not empty.
		 */

		// Samuel Comment:
		// Loop through the allFeeds object and determine whether
		// name is defined and is not empty.
		it('have name defined and not empty', function() {
			for (var i = allFeeds.length - 1; i >= 0; i--) {
				expect(allFeeds[i].name).toBeDefined();
				expect(allFeeds[i].name).not.toEqual('');
			};
		});
	});

	/* TODO: Write a new test suite named "The menu" */
	describe('The menu', function() {

		/* TODO: Write a test that ensures the menu element is
		 * hidden by default. You'll have to analyze the HTML and
		 * the CSS to determine how we're performing the
		 * hiding/showing of the menu element.
		 */

		// Samuel Comment: 
		// Menu element is hidden/shown on the basis of "menu-hidden"
		// class in body element, default being hidden
		it('is hidden by default', function() {
			expect($('body').hasClass("menu-hidden")).toBe(true);
		});

		/* TODO: Write a test that ensures the menu changes
		 * visibility when the menu icon is clicked. This test
		 * should have two expectations: does the menu display when
		 * clicked and does it hide when clicked again.
		 */

		// Samuel Comment: 
		// Menu element is hidden/shown on the basis of "menu-hidden"
		// class in the body element. First click shows the menu, which is
		// tested by the 1st expect() and subsequently the second click hides 
		// the menu that is tested by the second expect()          
		it('is hidden/shown when clicked', function() {
			$('.menu-icon-link').click();
			expect($('body').hasClass("menu-hidden")).toBe(false);
			$('.menu-icon-link').click();
			expect($('body').hasClass("menu-hidden")).toBe(true);
		});
	});

	/* TODO: Write a new test suite named "Initial Entries" */
	describe('Initial Entries', function() {

		/* TODO: Write a test that ensures when the loadFeed
		 * function is called and completes its work, there is at least
		 * a single .entry element within the .feed container.
		 * Remember, loadFeed() is asynchronous so this test wil require
		 * the use of Jasmine's beforeEach and asynchronous done() function.
		 */

		// Samuel Comment: 
		// As loadFeed is asynchronous it requires the use of beforeEach.
		// expect() is testing for the number of .entry elements that are
		// contained in .feed container.        
		beforeEach(function(done) {
			loadFeed(0, done);
		});

		it('At least a single .entry displayed when the loadFeed function is called', function(done) {
			expect($('.feed .entry').length).toBeGreaterThan(0);
			done();
		});
	});

	// Samuel Comment: 
	// Default timeout changed to 15 seconds to give the tester suffient time
	// to click on .menu-icon-link element (in the upper left corner) that toggles
	// left menu and the tester is required to click on any of the li in the .feed-list
	// and thus triggering loadFeed function 
	jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;
	/* TODO: Write a new test suite named "New Feed Selection" */
	describe('New Feed Selection', function() {

		/* TODO: Write a test that ensures when a new feed is loaded
		 * by the loadFeed function that the content actually changes.
		 * Remember, loadFeed() is asynchronous.
		 */

		// Samuel Comment: 
		// beforeEach is used as loadFeed is asynchronous function
		// .feed element outerHTML is stored in oldOuterHTML variable
		// before triggering loadFeed function by the tester clicking 
		// on menu item
		beforeEach(function(done) {
			$('.feed-list').on('click', 'a', function() {
				clickedElement = $(this);
				oldOuterHTML = $('.feed')[0].outerHTML;
				loadFeed(clickedElement.data('id'), done);
			});
		});

		// Samuel Comment: 
		// outer HTML of newly loaded .feed element is stored in variable
		// to be used for later comparison. 
		// If the tester selects menu item other than the default one
		// (Udacity Blog) than the .feed content should be modified.
		// If the tester selects default menu element, 
		// then the newly-loaded .feed content remains the same. 
		it('Content changes when new (other than default) feed is loaded or remains the same when the default feed (Udacity Blog) is clicked', function(done) {
			newOuterHTML = $('.feed')[0].outerHTML;
			expect($('.entry-link').length).toBeGreaterThan(0);

			if (clickedElement.data('id') > 0) {
				expect(newOuterHTML).not.toEqual(oldOuterHTML);
			} else {
				expect(clickedElement.data('id')).toBe(0);
				expect(newOuterHTML).toEqual(oldOuterHTML);
			}
			done();
		});
	});
}());