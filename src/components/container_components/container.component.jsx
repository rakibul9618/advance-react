import { CurrentUserLoader } from "./current_user_loader";
import { UserInfo } from "./user_info";
import UserLoader from "./user_loader";

const Container = () => {
  return (
    <>
      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>
      <UserLoader userId={"1"}>
        <UserInfo />
      </UserLoader>
      <UserLoader userId={"2"}>
        <UserInfo />
      </UserLoader>
      <UserLoader userId={"3"}>
        <UserInfo />
      </UserLoader>
    </>
  );
};

export default Container;
