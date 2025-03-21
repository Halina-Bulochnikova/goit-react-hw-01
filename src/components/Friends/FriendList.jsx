import FriendListItem from "../../components/Friends/FriendListItem";
import css from "./Friends.module.css";

function FriendList({friends}) {
    return (
<ul>
{friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem 
            avatar={friend.avatar} 
            name={friend.name} 
            isOnline={friend.isOnline} 
          />
        </li>
      ))}
</ul>
)
};
export default FriendList;