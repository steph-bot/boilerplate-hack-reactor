import React from 'react';
import axios from 'axios';

// Make an application!
// const App = () => {
//   return (
//     'Whatever youd like'
//   );
// };
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      image: '',
      title: '',
      description: '',
      date: '',
    };
  };

  componentDidMount() {
    // setting state
    // updating all of the values to some new data from the API
    this.getPhoto();
  };

  getPhoto() {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=YOUR_KEY')
    .then(response => {
      console.log('response: ', response);
      this.setState({
        image: response.data.url,
        title: response.data.title,
        description: response.data.explanation,
        date: response.data.date,
      });
      // }, () => {
      //   this.savePhoto();
      // });
    })
    .catch(console.error);
    // .then((response) => {
    //   console.log(this.state); // may or may be updated yet
    //   this.savePhoto();
    // });
  };

  savePhoto() {
    const { image, description, title, date } = this.state;
    // relative -> localhost:3030/photo
    axios.post('/photo', { data:
      { image, description, title, date
    } })
    .then(result => {
      console.log('Result of POST: ', result.data);
    })
    .catch(console.error);
  };
  /**
   * {
    "date": "2021-09-01",
    "explanation": "Why would galaxies emit jets that look like ghosts?  And furthermore, why do they appear to be dancing?  The curled and fluffy jets from the supermassive black holes at the centers of two host galaxies (top center and lower left) are unlike anything seen before.  They were found by astronomers using the Australian Square Kilometer Array Pathfinder (ASKAP) radio telescope when creating maps tracing the evolution of galaxies.  Images preceding this Evolutionary Map of the Universe survey only showed amorphous blobs.  Eventually, comparisons of relative amounts of energy emitted revealed the glowing elongated structures were created by electrons streaming around magnetic field lines",
    "media_type": "image",
    "service_version": "v1",
    "title": "Dancing Ghosts: Curved Jets from Active Galaxies",
    "url": "https://apod.nasa.gov/apod/image/2109/DancingGhosts_EnglishNorris_960.jpg"
}
   */

  render() {
    return (
      <main>
        <h1>NASA's APOTD</h1>
        <img src={this.state.image} />
        <h1>{this.state.title}</h1>
        <p>{this.state.description}</p>
        <p>{this.state.date}</p>
        <input
          type="submit"
          value="Save Photo"
          onClick={() => {
            this.savePhoto();
          }}
        />
      </main>
    );
  };
};

export default App;