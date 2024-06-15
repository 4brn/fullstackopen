import { useRef } from "react";
import { useState } from "react";

const Anecdote = ({ anecdote, votes }) => {
	return (
		<div>
			<p>{anecdote}</p>
			<p>has {votes} votes</p>
		</div>
	);
};

const Button = ({ onClick, text }) => {
	return <button onClick={onClick}>{text}</button>;
};

const App = () => {
	const anecdotes = [
		"If it hurts, do it more often.",
		"Adding manpower to a late software project makes it later!",
		"The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
		"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
		"Premature optimization is the root of all evil.",
		"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
		"Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
		"The only way to go fast, is to go well.",
	];

	const [selected, setSelected] = useState(0);
	const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
	const [highest, setHighest] = useState(0);

	const random = (range) => Math.floor(Math.random() * range);

	const handleSelected = (type) => {
		let newIndex;
		switch (type) {
			case "random":
				do {
					newIndex = random(anecdotes.length);
				} while (newIndex === selected);
				break;
			case "increment":
				newIndex = selected + 1;
				if (newIndex > anecdotes.length - 1) newIndex = 0;
				break;
		}
		setSelected(newIndex);
	};

	const handleVotes = () => {
		const newVotes = [...votes];
		newVotes[selected] += 1;
		setVotes(newVotes);
		console.log(newVotes, votes);

		const newHighest = newVotes.indexOf(Math.max(...newVotes));
		setHighest(newHighest);
		console.log(newHighest, highest);
	};

	return (
		<>
			<h2>Anecdote of the day</h2>
			<Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
			<Button onClick={() => handleSelected("random")} text={"next"} />
			<Button onClick={() => handleVotes()} text={"vote"} />
			<h2>Most Voted for Anecdote</h2>
			<Anecdote anecdote={anecdotes[highest]} votes={votes[highest]} />
		</>
	);
};

export default App;
