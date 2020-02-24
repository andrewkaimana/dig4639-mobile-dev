function ListItem(props) {
    return <li>{props.value}</li>;
  }
  
  function NumberList(props) {
    const cards = props.numbers;
    return (
      <ul>
        {cards.map((number) =>
          <ListItem key={string.toString()}
                    value={number} />
        )}
      </ul>
    );
  }
  
  const numbers = [1, 2, 3, 4, 5];
  ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
  );
  const cards = [
    { priority: 0, title: 'Max', content: 'Enjoys the beach.' },
    { priority: 1, title: 'Maggie', content: 'Loves to run.' },
    { priority: 2, title: 'Buddy', content: 'Sniffs butts.' },  
]
