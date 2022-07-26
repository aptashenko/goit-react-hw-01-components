import PropTypes from 'prop-types';
import StatisticItem from './StatisticItem';
import css from './Statistic.module.css';


function Statistic({ title, stats }) {
    return (
        <section className={css.statistic}>
            {title && <h2 className={css.title}>{ title }</h2>}

            <ul className={css.statList}>
                <StatisticItem items={stats} />
            </ul>
        </section>
    )
}

Statistic.propTypes = {
    title: PropTypes.string,
}


export default Statistic;