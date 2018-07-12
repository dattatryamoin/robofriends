import React from 'react';

const Card=({id, name , email})=>{
	return(

		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
		<img alt='robots' src={`https://robohash.org/${id}?150*150`}/>
		<div>
		<h2 className='f3 mb2 black'>{name}</h2>
		<p className='f5 fw4 gray mt0'>{email}</p>
		</div>
		</div>
		)
};

export default Card;



