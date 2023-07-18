import createTodoHomePage from './todo';
import createTabs from './tabs';


function initialLoad() {
    createTabs()
    createTodoHomePage();
}


export default initialLoad();