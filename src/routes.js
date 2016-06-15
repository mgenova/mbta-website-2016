import React from 'react';
import { useRouterHistory, Router, Route, IndexRoute } from 'react-router';
import { createHashHistory } from 'history'
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

import Home from './containers/Home';
/* CONTAINERS */

import Happenings from './containers/Happenings';
import Contact from './containers/Contact';
import Apply from './containers/Apply';
import Login from './containers/Login';
import Portal from './containers/Portal';

import Student from './containers/Student';
import Academics from './containers/Academics';
import Community from './containers/Community';
import QuickLinks from './containers/QuickLinks';


/* COMPONENTS */

import App from './components/App';
import Secondary from './components/student/Secondary';
import Elementary from './components/student/Elementary';
import Tea from './components/student/Tea';
import Summer from './components/student/Summer';
import Forms from './components/student/Forms';
import College from './components/student/College';

import Curriculum from './components/academics/Curriculum';
import Handbook from './components/academics/Handbook';
import Courses from './components/academics/Courses';

import About from './components/community/About';
import Board from './components/community/Board';
import Calendar from './components/community/Calendar';
import Alumni from './components/community/Alumni';
import Achievements from './components/community/Achievements';
import FAQs from './components/community/FAQs';
import Faculty from './components/community/Faculty';
import Staff from './components/community/Staff';

import ImportantInfo from './components/quicklinks/ImportantInfo';
import Careers from './components/quicklinks/Careers';

import NoMatch from './components/NoMatch';

const Routes = (
	<Router history={appHistory} >
		<Route path="/" component={App}>
			<IndexRoute component = {Home} />
		 	<Route path="happenings" component={Happenings}/>
		 	<Route path="contact" component={Contact}/>
		 	<Route path="apply" component={Apply}/>
			<Route path="login" component={Login}/>

		</Route>
		<Route path="/student" component={Student}>
			<Route path="secondary" component={Secondary}/>
			<Route path="elementary" component={Elementary}/>
			<Route path="tea" component={Tea}/>
			<Route path="summer" component={Summer}/>
			<Route path="forms" component={Forms}/>
			<Route path="college" component={College}/>
			<Route path="portal" component={Portal}/>
		</Route>
		<Route path="/academics" component={Academics}>
			<Route path="curriculum" component={Curriculum}/>
			<Route path="handbook" component={Handbook}/>
			<Route path="courses" component={Courses}/>
			<Route path="portal" component={Portal}/>
		</Route>
		<Route path="/community" component={Community}>
			<Route path="board" component={Board}/>
			<Route path="calendar" component={Calendar}/>
			<Route path="about" component={About}/>
			<Route path="alumni" component={Alumni}/>
			<Route path="achievements" component={Achievements}/>
			<Route path="faqs" component={FAQs}/>
			<Route path="faculty" component={Faculty}/>
			<Route path="staff" component={Staff}/>
		</Route>

		<Route path="/quicklinks" component={QuickLinks}>
			<Route path="importantinfo" component={ImportantInfo}/>
			<Route path="careers" component={Careers}/>
			<Route path="board" component={Board}/>
		</Route>

		<Route path="*" component={NoMatch}/>


    </Router>
)


export default Routes;

/*

<Route path="/student" component={Student}>
	<Route path="secondary" component={Secondary}/>
	<Route path="elementary" component={Elementary}/>
	<Route path="tea" component={Tea}/>
	<Route path="summer" component={Summer}/>
	<Route path="forms" component={Forms}/>
</Route>

<Route path="college" component={College}/>
<Route path="portal" component={Portal}/>

<Route component={Academics}>
	<Route path="curriculum" component={Curriculum}/>
	<Route path="Handbook" component={Handbook}/>
	<Route path="courses" component={Courses}/>
	<Route path="portal" component={Portal}/>
</Route>

<Route component={Community}>
	<Route path="board" component={Board}/>
	<Route path="calendar" component={Calendar}/>
	<Route path="about" component={About}/>
	<Route path="alumni" component={Alumni}/>
	<Route path="achievements" component={Achievements}/>
	<Route path="faqs" component={FAQs}/>
	<Route path="faculty" component={Faculty}/>
	<Route path="staff" component={Staff}/>
</Route>

<Route component={QuickLinks}>
	<Route path="importantinfo" component={ImportantInfo}/>
	<Route path="careers" component={Careers}/>
	<Route path="board" component={Board}/>
</Route>

<Route path="*" component={NoMatch}/>

*/
