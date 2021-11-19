import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));

/**
 * WORKSHOP:
 *  1) On page load: display the results for today's photo: [ x ]
 *   - Image
 *   - Title
 *   - Description
 *   - Date
 *
 *   2) App to be served from Express
 *   3) Users have the option to save this information for later
 *
 * Stretch:
 *  - Users can query by a specific day
 *  - Users can see lists of all the things they've saved
 *  - USers can click list items to see that photo again
 *
 * Example Data:
 *
 * image, description, title, date
 *
 * {
    "date": "2021-09-01",
    "explanation": "Why would galaxies emit jets that look like ghosts?  And furthermore, why do they appear to be dancing?  The curled and fluffy jets from the supermassive black holes at the centers of two host galaxies (top center and lower left) are unlike anything seen before.  They were found by astronomers using the Australian Square Kilometer Array Pathfinder (ASKAP) radio telescope when creating maps tracing the evolution of galaxies.  Images preceding this Evolutionary Map of the Universe survey only showed amorphous blobs.  Eventually, comparisons of relative amounts of energy emitted revealed the glowing elongated structures were created by electrons streaming around magnetic field lines",
    "media_type": "image",
    "service_version": "v1",
    "title": "Dancing Ghosts: Curved Jets from Active Galaxies",
    "url": "https://apod.nasa.gov/apod/image/2109/DancingGhosts_EnglishNorris_960.jpg"
}
 *
 */