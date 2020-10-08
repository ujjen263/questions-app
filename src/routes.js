import Home from './components/Home.vue';
import QuizSection from './components/QuizSection.vue';
import QuizMaker from './components/QuizMaker.vue';
import AboutUs from './components/AboutUs.vue';
import HowToUse from './components/HowToUse.vue';
import NewQuestion from './components/contents/NewQuestion.vue';
import ViewQuestion from './components/contents/ViewQuestion.vue';
import UpdateQuestion from './components/contents/UpdateQuestion.vue';


export const routes = [
	{ path: '/', component: Home},
	{ path: '/about-us', component: AboutUs},
	{ path: '/take-quiz', component: QuizSection},
	{ path: '/make-quiz', component: QuizMaker},
	{ path: '/make-quiz/new-question', component: NewQuestion},
	{ path: '/make-quiz/view-question', component: ViewQuestion},
	{ path: '/make-quiz/update-question/:id', component: UpdateQuestion},
	{ path: '/how-to-use', component: HowToUse},
];