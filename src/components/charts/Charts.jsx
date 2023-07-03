import "./charts.scss";
import { ResponsiveContainer, LineChart, Line, XAxis, Tooltip, CartesianGrid } from "recharts";

const Charts = ({title, data, dataKey, grid}) => {

    return (
        <div className="charts">
            <h3 className="chartsTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}> 
                <LineChart width={730} height={250} data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    {grid && <CartesianGrid strokeDasharray="5 5" stroke="#e0dfdf" />}
                    <XAxis dataKey="name" stroke="#5550bd" />
                    {/* <YAxis /> */}
                    <Tooltip />
                    {/* <Legend /> */}
                    <Line type="monotone" dataKey={dataKey} stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Charts; 