import Profile from "./Profile/Profile";
import Statistic from "./Statistic/Statistic";
import FriendList from "./FriendList/FriendList";
import user from "../text/user";
import data from "../text/data";
import friends from "../text/friends";
import transactions from "../text/transactions";
import TransactionsHistory from "./TransactionsHistory/TransactionsHistory";

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic
        title="Upload stats"
        stats={data} 
      />
      <Statistic
        stats={data} 
      />
      <FriendList
        friends={friends}
      />
      <TransactionsHistory items={transactions} />
    </>
  );
};
