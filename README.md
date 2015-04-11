# Instructions

Please run the application by clicking on index.html in the root directory. The application is a web-based RSS feeds reader with jasmine testing section on the bottom of the page. Please note that in order to test all specs (especially the last spec). There is a default timeout changed to 15 seconds to give the tester suffient time to click on .menu-icon-link element (in the upper left corner) that toggles the left menu. The tester is subsequently required to click on any of the li in the .feed-list and thus triggering loadFeed function. If the tester selects menu item other than the default one (Udacity Blog) than the .feed content should be modified. In case the tester selects default menu element, then the newly-loaded .feed content remains the same as before. 

## Tests

1. Test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
2. Test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
3. Test that ensures the menu element is hidden by default.
4. Test that ensures the menu changes visibility when the menu icon is clicked.
5. Test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
6. Test that ensures content changes when new (other than default) feed is loaded or remains the same when the default feed is clicked.