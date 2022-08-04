import React from "react";
import Footer from "../../components/Footer/Footer";
import CourseCard from "../../components/SuperAdminComponents/CourseCard/CourseCard";
import MilestoneCard from "../../components/SuperAdminComponents/MilestoneCard/MilestoneCard";
import SuperAdminHeader from "../../components/SuperAdminComponents/SuperAdminHeader/SuperAdminHeader";

import "./SuperAdminDashboard.scss";

const SuperAdminDashboard = () => {
	return (
		<div className='sa-dashboard-container'>
			<SuperAdminHeader />
			<div className='sa-dashboard-content'>
				<section className='ongoing-courses'>
					<h3>Ongoing Courses</h3>
					<CourseCard
						title='Course Title'
						taughtBy='Google'
						attendees='34'
						completed='4/15'
						registered=''
					/>
					<h3>Upcoming Courses</h3>
					<CourseCard
						title='Course Title'
						taughtBy='Google'
						attendees=''
						completed=''
						registered='18'
					/>
					<CourseCard
						title='Course Title'
						taughtBy='Microsoft'
						attendees=''
						completed=''
						registered='4'
					/>
				</section>

				<section className='milestones'>
					<h3>Milestones</h3>
					<div className='cards'>
						<MilestoneCard />
						<MilestoneCard />
						<MilestoneCard />
						<MilestoneCard />
						<MilestoneCard />
					</div>
				</section>
			</div>
			{/* <Footer /> */}
		</div>
	);
};
export default SuperAdminDashboard;
