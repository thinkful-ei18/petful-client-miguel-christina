'use strict';

import React from 'react';

export default function Pet(props) {

  return (
    <div className="pet">
      <header className="pet-header">
        <h1 className="pet-name">{props.pet.name}</h1>
        <img src={props.pet.imageURL} className="pet-photo" alt={props.pet.imageDescription} />
      </header>
      <main>
        <dl>
          <dt>Name</dt>
          <dd>{props.pet.name}</dd>
          <dt>Sex</dt>
          <dd>{props.pet.sex}</dd>
          <dt>Age</dt>
          <dd>{props.pet.age}</dd>
          <dt>Breed</dt>
          <dd>{props.pet.breed}</dd>
          <dt>Story</dt>
          <dd>{props.pet.story}</dd>
        </dl>
        <button>Adopt!</button>
      </main>
    </div>

  );

}

