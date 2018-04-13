'use strict';

import React from 'react';

export default function Pet(props) {

  return (
    <div className="pet">
      <header className="pet-header">
        <h1 className="pet-name">{props.animal.name}</h1>
        <img src={props.animal.imageURL} className="pet-photo" alt={props.animal.imageDescription} />
      </header>
      <main>
        <dl>
          <dt>Name</dt>
          <dd>{props.animal.name}</dd>
          <dt>Sex</dt>
          <dd>{props.animal.sex}</dd>
          <dt>Age</dt>
          <dd>{props.animal.age}</dd>
          <dt>Breed</dt>
          <dd>{props.animal.breed}</dd>
          <dt>Story</dt>
          <dd>{props.animal.story}</dd>
        </dl>
        <button onClick={() => props.handleAdopt()}>Adopt!</button>
      </main>
    </div>

  );

}
