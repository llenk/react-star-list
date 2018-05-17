import React from 'react';

const StarForm = (props) => <form onSubmit={props.handleSubmit}>
    <input value={props.newStar.name} onChange={props.handleChangeFor('name')} type="text" placeholder="name" />
    <input value={props.newStar.rad} onChange={props.handleChangeFor('rad')} type="text" placeholder="radius" />
    <p><input type="submit" /></p>
</form>;

export default StarForm;
