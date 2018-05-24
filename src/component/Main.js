import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import plakatScaled from './DC_plakat2018_F6_scaled.jpg'
import plakat from './DC_plakat2018_F6.jpg'

export default class Main extends Component {
  render () {
    return <div>
      <div className="jumbotron">
        <h1 className="display-4">Sukarela Sepak Takraw Elmshorn e.V.</h1>
        <p className="lead">Komm zum Training und spiele mit uns einen akrobatischen Ballsport aus Südostasien.</p>
        <hr className="my-4"/>
        <p>Bei Fragen stehen wir Euch unter <a href="mailto:info@takraw-elmshorn.de">info@takraw-elmshorn.de</a> gern zur Verfügung.</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-7">
            <h2>Trainingszeiten</h2>
            <p>Montags (Krückkau-Halle): 20.30 – 22.00 Uhr</p>
            <p>Mittwochs (Rampskamp-Halle): 20.00 – 22.00 Uhr</p>
            <p>Samstags (EBS-Halle): 14.00 – 17.00 Uhr</p>
            <div className="row support-video">
              <div className="col">
                <ReactPlayer url='https://www.youtube.com/watch?v=ghBWn49LoEk'/>
              </div>
            </div>
          </div>
          <div className="col">
            <a href={plakat}>
              <img src={plakatScaled} alt="Dragons Cup 2018" />
            </a>
          </div>
        </div>

      </div>
    </div>
  }
}