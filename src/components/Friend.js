function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
export function Friend({ friend, selectedFriend, OnSelect }) {
  const isSelected = friend.id === selectedFriend?.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name}></img>
      <h4>{friend.name}</h4>

      {friend.balance > 0 ? (
        <p className="red">
          You owe {friend.name}: ${friend.balance}
        </p>
      ) : null}

      {friend.balance < 0 ? (
        <p className="green">
          {friend.name} owes you: ${Math.abs(friend.balance)}
        </p>
      ) : null}

      {friend.balance === 0 ? <p>You and {friend.name} are even</p> : null}
      <Button
        onClick={() => {
          OnSelect(friend);
        }}
      >
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
