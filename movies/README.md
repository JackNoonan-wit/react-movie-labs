
# Assignment 1 - ReactJS app.

Name: Jack Noonan

## Overview.

[A brief statement on the content of this repository.]
This repository contains all the previous lab work regarding the movies app, along with an expanded catalogue by featuring tv shows along with those movies.

### Features.
[ A bullet-point list of the __new features__ you added to the Movies Fan app (and any modifications to existing features) .]

+ Show list page added to browse shows
+ A new page detailing any information available about any particular show you clicked on from the shows list page.
+ the ability to add a show to your favourites
+ Any show that you have added to your favourites will appear on the new favourite shows page, with the ability to remove them from this page at any time.
+ etc

## Setup requirements.

[ Outline any non-standard setup steps necessary to run your app locally after cloning the repo.]

## API endpoints.

[ List the __additional__ TMDB endpoints used, giving the description and pathname for each one.] 
https://api.themoviedb.org/3/genre/tv/list?api_key=process.env.REACT_APP_TMDB_KEY&language=en-US - gathers the show genres
https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY} - gathers the show reviews
https://api.themoviedb.org/3/tv/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US - gathers the show images
https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US - gathers individual shows and their details
https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1 - gathers the shows

e.g.
+ Discover list of shows - shows/home
+ Show details - shows/:id
+ show favourites - /shows/favorites

## Routing.

[ List the __new routes__ supported by your app and state the associated page.]

+ /shows/home - displays all available shows.
+ /shows/:id - displays a specific show.
+ /shows/favourites - displays favourited shows


## Independent learning (If relevant).

Itemize the technologies/techniques you researched independently and adopted in your project, 
i.e. aspects not covered in the lectures/labs. Include the source code filenames that illustrate these 
(we do not require code excerpts) and provide references to the online resources that helped you (articles/blogs).