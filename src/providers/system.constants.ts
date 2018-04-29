
export const availableLanguages = [{
	code: 'en',
	name: 'English'
}, {
    code: 'ar',
    name: 'عربى'
}];


export const defaultLanguage = (localStorage.getItem('lang')) ?  localStorage.getItem('lang') : 'en';

export const sysOptions = {
	systemLanguage: defaultLanguage
};

export const appId = "dramal";