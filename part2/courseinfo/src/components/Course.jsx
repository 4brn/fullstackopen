const Header = ({ name }) => <h1>{name}</h1>;

const Total = ({ parts }) => {
  const total = parts.reduce((acc, part) => acc + part.exercises, 0);
  return (
    <b>
      <p>total of {total} excercises</p>
    </b>
  );
};

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) =>
  parts.map((part) => <Part key={part.id} part={part} />);

const Course = ({ course }) => (
  <div>
    <Header name={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
);

export default Course;
