import React from "react";

import "./SearchBox.scss";
// import search from "../../assets/search.png";
import bell from "../../assets/bell.png";
import person from "../../assets/person.png";

const SearchBox = () => {
	return (
		<div className='searchbox'>
			<form>
				<input id='search' type='text' name='search' placeholder='Search' />
			</form>
			<div className='interaction-panel'>
				<div className='notifications'>
					<img src={bell} alt='Notifications' />
				</div>
				<div className='community-profile'>
					<img src={person} alt='Community Profile' />
				</div>
			</div>
		</div>
	);
};

export default SearchBox;
