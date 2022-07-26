import PropTypes from 'prop-types';
import css from './Statistic.module.css';

function StatisticItem({ items }) {
    return (
        items.map(item => {
            return (
                <li className={css.item} key={item.id}>
                    <span className={css.label}>{ item.label }</span>
                    <span className={css.percentage}>{ item.percentage }%</span>
                </li>
            )
        })
    )
}

export default StatisticItem;

StatisticItem.propTypes = {
    items: PropTypes.array.isRequired,
    item: PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.string.isRequired,
    })
}