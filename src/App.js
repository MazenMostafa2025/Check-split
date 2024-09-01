import { useState } from "react";
import { Friends } from "./components/Friends";
import { AddFriend } from "./components/AddFriend";
import { SplitBill } from "./components/SplitBill";
import "./index.css";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [friends, setFriends] = useState(initialFriends);
  function handleSplitBill(value) {
    setFriends((friends) => {
      return friends.map((friend) => {
        return friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend;
      });
    });
    setSelectedFriend(null);
    setShowAddFriend(false);
  }
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }
  function handleSelection(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }
  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }
  return (
    <>
      <div className="app">
        <div className="sidebar">
          <Friends
            friends={friends}
            selectedFriend={selectedFriend}
            OnSelect={handleSelection}
          />
          {showAddFriend && <AddFriend onAddFriend={handleAddFriend} />}
          <Button onClick={handleShowAddFriend}>
            {showAddFriend ? "Close" : "Add friend"}
          </Button>
        </div>
        {selectedFriend && (
          <SplitBill
            selectedFriend={selectedFriend}
            onSplitBill={handleSplitBill}
            key={selectedFriend.id}
          />
        )}
      </div>
    </>
  );
}

export default App;
