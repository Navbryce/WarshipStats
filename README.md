# ABoat

# Set Up
1. Configure `SHIP_APP` environment variable to point to the frontend directory
2. Install MongoDB and create ABoatDatabase

# Warnings
Note, if you try to scrape a ship and it does not appear. Several issues might have occurred. Assuming everything is set up properly, we can narrow the issue to 1 of 2 things:
1. The ship did not scraper properly, meaning there is an issue with the scraper
2. The range sliders on the GUI have their maxes too low. The ship is being filtered out by default.

# Demo
**NOTE**: Loading the demo may take a while because of free Heroku hosting--they need to load the app back into the server's cache.
https://ship-website.herokuapp.com/
