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
        it('have URL defined and not empty', function() {
            for (var i = allFeeds.length - 1; i >= 0; i--) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toEqual('');
//              expect(allFeeds[i].url).not.toBeNull();
            };
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('have name defined and not empty', function() {
            for (var i = allFeeds.length - 1; i >= 0; i--) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toEqual('');
            };
        });

    });

    /* TODO: Write a new test suite named "The menu" */

    describe('The menu', function() {

        // added matcher for hasClass    
/*        beforeEach(function() {
            this.addMatchers({
                toHaveClass: function(className) {
                    return this.actual.hasClass(className);
                }
            });
        });*/


        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('menu element is hidden by default', function() {
    //      expect($('body').hasClass("menu-hidden")).toBeTruthy();
    //      expect($('body')).toHaveClass("menu-hidden");
            expect($('body').hasClass("menu-hidden")).toBe(true);
        });


         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('menu element is hidden/shown when clicked', function() {
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

        beforeEach(function(done) {
            loadFeed(0,done);
        });

        it('At least a single .entry displayed when the loadFeed function is called', function(done) {
            expect($('.entry').length).toBeGreaterThan(0);
            done();
        });

    });


    jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000; 
    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {   

        beforeEach(function (done) { 
             $('.feed-list').on('click', 'a', function() { 
                clickedElement = $(this);
                oldOuterHTML = $('.feed')[0].outerHTML; 
                loadFeed(clickedElement.data('id'), done); 
             }); 
        }); 

        it('Content changes when new (other than default) feed is loaded or remains the same when the default feed is clicked', function(done) {  
            newOuterHTML = $('.feed')[0].outerHTML;
            expect($('.entry-link').length).toBeGreaterThan(0); 

            if (clickedElement.data('id') > 0) {         
                expect(newOuterHTML).not.toEqual(oldOuterHTML); 
            }   else {
                expect(clickedElement.data('id')).toBe(0);     
                expect(newOuterHTML).toEqual(oldOuterHTML);     
            }

            done();    

        });     
    });                    

}());
