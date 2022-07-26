import PropTypes from 'prop-types';
import css from './TransactionsHistory.module.css';

function TransactionsHistory({ items }) {
    return (
        <table className={css.transactionHistory}>
            <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
            </thead>

            <tbody>
                {items.map(item => {
                    return (
                        <tr key={ item.id}>
                            <td>{ item.type }</td>
                            <td>{ item.amount }</td>
                            <td>{ item.currency }</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

TransactionsHistory.propTypes = {
    items: PropTypes.array.isRequired,
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }),
}

export default TransactionsHistory;