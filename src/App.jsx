import { useState } from 'react';

const Button = ({ functionality, text }) => {
	return <button onClick={functionality}>{text}</button>;
};

const Feedback = ({ handleGood, handleNeutral, handleBad }) => {
	return (
		<>
			<h1>give feedback</h1>
			<Button functionality={handleGood} text='good'>
				good
			</Button>
			<Button functionality={handleNeutral} text='neutral'>
				neutral
			</Button>
			<Button functionality={handleBad} text='bad'>
				bad
			</Button>
		</>
	);
};

const StatisticLine = ({ text, value }) => {
	return (
		<p>
			{text} {value}
		</p>
	);
};

const Statistics = ({ good, neutral, bad }) => {
	const total = good + neutral + bad;

	return (
		<>
			<h1>statistics</h1>
			{total > 0 ? (
				<>
					<StatisticLine text='good' value={good} />
					<StatisticLine text='neutral' value={neutral} />
					<StatisticLine text='bad' value={bad} />
					<StatisticLine text='all' value={total} />
					<StatisticLine text='average' value={(good - bad) / total} />
					<StatisticLine text='positive' value={good / total + '%'} />
				</>
			) : (
				<p>no feedback given</p>
			)}
		</>
	);
};

const App = () => {
	const handleGood = () => setGood(good + 1);
	const handleNeutral = () => setNeutral(neutral + 1);
	const handleBad = () => setBad(bad + 1);

	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	return (
		<div>
			<Feedback
				handleGood={handleGood}
				handleNeutral={handleNeutral}
				handleBad={handleBad}
			/>
			<Statistics good={good} neutral={neutral} bad={bad} />
		</div>
	);
};

export default App;
