'use strict';

import React from 'react';


export default function Dashboard(props) {

  return (
    <div className='pet-page'>
      <div className="cat">
        <header className="cat-header">
          <h1 className="cat-name">{props.catToAdopt.name}</h1>
          <img src={props.catToAdopt.imageURL} className="cat-photo" alt={props.catToAdopt.imageDescription} />
        </header>
        <main>
          <dl>
            <dt>Name</dt>
            <dd>{props.catToAdopt.name}</dd>
            <dt>Sex</dt>
            <dd>{props.catToAdopt.sex}</dd>
            <dt>Age</dt>
            <dd>{props.catToAdopt.age}</dd>
            <dt>Breed</dt>
            <dd>{props.catToAdopt.breed}</dd>
            <dt>Story</dt>
            <dd>{props.catToAdopt.story}</dd>
          </dl>
          <button>Adopt!</button>
        </main>
      </div>

      <div className="dog">
        <header className="dog-header">
          <h1 className="dog-name">{props.dogToAdopt.name}</h1>
          <img src={props.dogToAdopt.imageURL} className="dog-photo" alt={props.dogToAdopt.imageDescription} />
        </header>
        <main>
          <dl>
            <dt>Name</dt>
            <dd></dd>
            <dt>Sex</dt>
            <dd></dd>
            <dt>Age</dt>
            <dd></dd>
            <dt>Breed</dt>
            <dd></dd>
            <dt>Story</dt>
            <dd></dd>
          </dl>
          <button>Adopt!</button>
        </main>
      </div>
    </div>
  );
}



