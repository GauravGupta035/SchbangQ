import React from "react";

import EmployeeHeader from "../../components/EmployeeComponents/EmployeeHeader/EmployeeHeader";
import SearchBox from "../../components/SearchBox/SearchBox";

import "./Community.scss";

const Community = () => {
	return (
		<div className='community-container'>
			<EmployeeHeader />
			<hr />
			<section className='utility-bar'>
				<SearchBox />
			</section>
		</div>
	);
};

export default Community;
