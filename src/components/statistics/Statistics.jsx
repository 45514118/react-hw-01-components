import style from './Statistics.module.css'

export const Statistics = ({ stats, titleName }) => {
    return (
        <div className={style.statistics}>
            <h2 className={style.title}>{titleName}</h2>
            <ul className={style.stat__list}>
                {stats.map(stat => 
                    <li className={style.item} key={stat.id} style={{backgroundColor: RandomHexColor()}}>
                        <span className={style.label}>{stat.label}</span>
                        <span className={style.percentage}>{stat.percentage}%</span>
                    </li>)}
            </ul>
        </div>
    )
}
const RandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
