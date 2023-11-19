import { useState } from 'react';

const Feedback = ({ handleGood, handleNeutral, handleBad }) => {
	return (
		<>
			<h1>give feedback</h1>
			<button onClick={handleGood}>good</button>
			<button onClick={handleNeutral}>neutral</button>
			<button onClick={handleBad}>bad</button>
		</>
	);
};

const Statistics = ({ good, neutral, bad }) => {
	return (
		<>
			<h1>statistics</h1>
			<p>good: {good}</p>
			<p>neutral: {neutral}</p>
			<p>bad: {bad}</p>
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
