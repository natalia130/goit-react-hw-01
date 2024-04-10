import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ transactions }) => {
    console.log(transactions);
    return (
        <table className={css["transaction-table"]}>
            <thead className={css["transaction-table-head"]}>
                <tr >
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            
            <tbody>
                {transactions.map((transaction) => {
                    return (
                        <tr key={transaction.id}>
                            <td>{transaction.type}</td>
                            <td>{transaction.amount}</td>
                            <td>{transaction.currency}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>

    );
};

export default TransactionHistory;
