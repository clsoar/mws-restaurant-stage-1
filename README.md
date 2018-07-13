# Restaurant Reviews

The goal for this project was to take a static webpage and make it into a offline-capable, accessibility-enhanced, mobile-ready web application. The site itself contains restaurant information and reviews with a map application embedded in the site.

## Getting Started

The Restaurant Reviews site can be found at this link:

Alternatively, to run this on your own computer follow these steps:

1. Download or clone this repository.

2. Start a simple HTTP server to serve the site files on your local computer

To do this you will need to either already have a preferred method of hosting a local server or you can set one up with Python.

Steps for setting up Python to run a server:

* If needed, download Python.

* In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python -m http.server`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

* You can navigate to this server by visiting http://localhost:8000 on your browser (or whatever port number you used).

3. If you have chosen a port other than 8000, for offline capabilities you will need to open the dbhelper.js file in the 'js' folder and change line 11:18 to the port number you chose.

4.  Navigate to the page on your browser.

5. There are dropdown filter options below the map to filter by neighborhood and/or cuisine.

6. More information and reviews can be found by clicking on the map icons or the restaurant cards below the map.

## Dependencies

* Mapbox leaflet

## Credits

* Starter code provided by Udacity for the Front-End Nanodegree
