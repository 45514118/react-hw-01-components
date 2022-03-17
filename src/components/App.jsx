import { Profile } from "./profile/Profile";
import user from './profile/user.json'
import { Statistics } from "./statistics/Statistics";
import data from './statistics/data.json'

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag = {user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        stats={data}
      />
    </>
  );
};
