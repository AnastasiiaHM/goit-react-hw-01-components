import { UserCard } from "./UserCard/userCard";
import { Statistics } from "./Statistic/statistics";
import { FriendList } from "./FriendList/friendList";
import { TransactionHistory } from "./Transaction/transactionHistory";
import user from "user.json";
import data from "data.json";
import friends from "friends.json";
import transactions from "transactions.json";

export const App = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        gap: 50,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        fontSize: 40,
        color: "#010101",
      }}
    >
      React homework template
      <UserCard
        name={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title={"Upload stats"} stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
