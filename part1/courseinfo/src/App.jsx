const Header = (props) => {
    const {
        course: { name },
    } = props;
    return <h1>{name}</h1>;
};

const Content = (props) => {
    const {
        course: { parts },
    } = props;
    return (
        <div>
            <Part info={parts[0]} />
            <Part info={parts[1]} />
            <Part info={parts[2]} />
        </div>
    );
};

const Part = (props) => {
    const { info } = props;
    return (
        <p>
            {info.name} {info.exercises}
        </p>
    );
};

const Total = (props) => {
    const {
        course: { parts },
    } = props;
    const sum = parts.reduce(
        (accumulator, part) => accumulator + part.exercises,
        0,
    );

    return <p>Number of exercises {sum}</p>;
};

const App = () => {
    const course = {
        name: "Half Stack application development",
        parts: [
            {
                name: "Fundamentals of React",
                exercises: 10,
            },
            {
                name: "Using props to pass data",
                exercises: 7,
            },
            {
                name: "State of a component",
                exercises: 14,
            },
        ],
    };

    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </div>
    );
};

export default App;
