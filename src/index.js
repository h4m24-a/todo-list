import './style.css';
import { format } from 'date-fns';

import createTasks from './tasks';
import createUI from './dom';
import createProjects from './projects'


// Initial Load
createUI()
createTasks()
createProjects()
