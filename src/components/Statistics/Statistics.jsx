import './Statistics.css';

export const Statistics = ({ title, stats }) => {
    return (
        <section class="statistics">
            {title? <h2 class="title">{title}</h2>:<></>}
            <ul class="stat-list">
                {stats.map(({id, label, percentage})=>  <li class="item">
            <span class="label">.docx</span>
                    <span class="percentage">{percentage}%</span>
            </li>
             )}
           
        </ul>
        </section>   
            )
        }