import { useState } from 'react'

const Button = ({ text, onClick }) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}

const StatisticsLine = ({ text, stat }) => {
    return (
        <>
            <tr>
                <td>{text}</td>
                <td>{stat}</td>
            </tr>
        </>
    )
}

const Stats = ({ good, neutral, bad }) => {
    const total = good + neutral + bad
    const avg = (good - bad) / total
    const positive = good / total
    if (total === 0) {
        return <p>No feedback given</p>
    }
    return (
        <>
            <h2>Statistics</h2>
            <table>
                <tbody>
                    <StatisticsLine text="Good" stat={good} />
                    <StatisticsLine text="Neutral" stat={neutral} />
                    <StatisticsLine text="Bad" stat={bad} />
                    <StatisticsLine text="All" stat={total} />
                    <StatisticsLine text="Average" stat={avg} />
                    <StatisticsLine text="Positive" stat={positive} />
                </tbody>
            </table>
        </>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h1>Give feedback</h1>
            <Button text='good' onClick={() => setGood(good + 1)} />
            <Button text='neutral' onClick={() => setNeutral(neutral + 1)} />
            <Button text='bad' onClick={() => setBad(bad + 1)} />
            <Stats good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

export default App