import { useState } from "react";
export function SplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [myExpense, setMyExpense] = useState("");
  const [whoPays, setWhoPays] = useState("user");
  const friendExpense = bill ? bill - myExpense : "";
  function handleBill(e) {
    e.preventDefault();
    if (!bill || !myExpense) return;
    onSplitBill(whoPays === "me" ? myExpense : -myExpense);
  }
  return (
    <form className="form-split-bill" onSubmit={handleBill}>
      <h2>SPLIT A BILL WITH {selectedFriend.name}</h2>
      <span>Bill value </span>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      ></input>
      <span>Your expense </span>
      <input
        type="text"
        value={myExpense}
        onChange={(e) =>
          setMyExpense(
            e.target.value > bill ? myExpense : Number(e.target.value)
          )
        }
      ></input>

      <span>{selectedFriend.name}'s expense</span>
      <input type="text" disabled value={friendExpense}></input>

      <span>Who is paying the bill ?</span>
      <select
        type="text"
        value={whoPays}
        onChange={(e) => setWhoPays(e.target.value)}
      >
        <option value="me">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <button>Split Bill</button>
    </form>
  );
}
