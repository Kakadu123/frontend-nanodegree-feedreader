# Instructions

Please run the application by clicking on index.html contained in the root directory in a modern web browser such as Firefox, Chrome, Internet Explorer at least version 9 or Safari). The application is a web-based RSS feeds reader with jasmine testing section on the bottom of the page.

## Tests

1. Test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
2. Test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
3. Test that ensures the menu element is hidden by default.
4. Test that ensures the menu changes visibility when the menu icon is clicked.
5. Test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
6. Test that ensures content changes when new (other than default: Udacity Blog) feed is loaded.