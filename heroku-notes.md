Heroku
- Have to update pip file in the ABoat directory not the ABoatScraping directory
- Update config file
- Have to REBUILD angular project AFTER the config file has been updated because the config file at the time of the build is built into the project
- Make sure log files exist
- Check the file system using "heroku run bash" to make sure the heroku git repository matches the heroku-combined branch
