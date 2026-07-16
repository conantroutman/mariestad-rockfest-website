import type { PageServerLoad } from './$types';
import questions from './questions.json';

export type Question = {
	question: string;
	answer: string;
};

export const load: PageServerLoad = () => {
	return {
		questions: questions as Question[]
	};
};
