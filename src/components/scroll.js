import React from 'react';

const Scroll= (props) =>{
return (
	<div style={{overflow:'scroll', border:'5 px solid black', height:'400px' }}>
	{props.children}
	</div>
	);
};

export default Scroll;