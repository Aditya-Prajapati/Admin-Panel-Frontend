import "./widgetLg.scss";

const WidgetLg = () => {
    const Button = ({type}) => {
        return <button className={"widgetLgButton " + type}>{type}</button>
    }

    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest Transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" className="widgetLgImg" />
                        <span className="widgetLgUsername">User2</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2023</td>
                    <td className="widgetLgAmount">$119</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" className="widgetLgImg" />
                        <span className="widgetLgUsername">User2</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2019</td>
                    <td className="widgetLgAmount">$119</td>
                    <td className="widgetLgStatus">
                        <Button type="Declined" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" className="widgetLgImg" />
                        <span className="widgetLgUsername">User2</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2012</td>
                    <td className="widgetLgAmount">$119</td>
                    <td className="widgetLgStatus">
                        <Button type="Pending" />
                    </td>
                </tr>
            </table>
        </div>
    )   
}

export default WidgetLg;