import { Friend } from "./Friend";
export function Friends({ friends, selectedFriend, OnSelect }) {
  return (
    <ul>
      {friends.map((friend) => {
        return (
          <Friend
            friend={friend}
            key={friend.id}
            selectedFriend={selectedFriend}
            OnSelect={OnSelect}
          />
        );
      })}
    </ul>
  );
}
