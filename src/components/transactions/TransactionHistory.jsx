import style from './TransactionHistory.module.css'

export const TransactionHistory = ({ items }) => {
    return (
        <table className={style.transaction_history}>
            <thead>
                <tr>
                    <th className={style.table_header}>Type</th>
                    <th className={style.table_header}>Amount</th>
                    <th className={style.table_header}>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item =>
                <tr key={item.id}>
                    <td className={style.table_cell}>{item.type}</td>
                    <td className={style.table_cell}>{item.amount}</td>
                    <td className={style.table_cell}>{item.currency}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}