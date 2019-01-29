import * as composes1 from './composes-1.css';
import * as composes2 from './composes-2.css';
import * as  composes3 from './composes-3.css';

window.onload = () => document.body.innerHTML = `
    <div class="${composes1.main}"></div>
    <div class="${composes2.main}"></div>
    <div class="${composes3.main}"></div>
`;
