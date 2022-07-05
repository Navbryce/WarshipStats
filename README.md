# WarshipStats 
Serves as the frontend for the [warship scraper](https://github.com/Navbryce/ABoatScraping).
Coded in 2017 (and updated in 2022 to use Netlify)

# Stack
- Angular

[See Backend](https://github.com/Navbryce/ABoatScraping)

# Why does the ship not appear when I scrape it?
Note, if you try to scrape a ship and it does not appear. Several issues might have occurred. Assuming everything is set up properly, we can narrow the issue to 1 of 2 things:
1. The ship did not scraper properly, meaning there is an issue with the scraper
2. The range sliders on the GUI have their maxes too low. The ship is being filtered out by default.

# Demo
**NOTE**: Loading the demo may take a while because of free Heroku hosting on the backend (cold boots)

[See demo](https://warshipstats.netlify.app/)
