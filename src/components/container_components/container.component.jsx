import { Client } from "../../utils/axios.config";
import { getDataFromLocalStorage } from "../../utils/local_storage";
import { BookInfo } from "./book_info";
import { CurrentUserLoader } from "./current_user_loader";
import DataSource from "./data_source";
import DataSourceWithRender from "./data_source_with_render";
import ResourceLoader from "./resource_loader";
import { UserInfo } from "./user_info";
import UserLoader from "./user_loader";

async function handleGetData(url) {
  const response = await Client.get(url);
  return response;
}

const Message = ({ msg }) => {
  console.log({ msg });
  return <h1>{msg}</h1>;
};

const Container = () => {
  return (
    <>
      <hr />
      <h5>Data From local storage</h5>
      <DataSource
        getData={() => getDataFromLocalStorage("test")}
        resourceName="msg"
      >
        <Message />
      </DataSource>
      <h5>Current Loader</h5>
      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>
      <hr />
      <h5>User Loader</h5>
      <UserLoader userId={"1"}>
        <UserInfo />
      </UserLoader>
      <UserLoader userId={"2"}>
        <UserInfo />
      </UserLoader>
      <UserLoader userId={"3"}>
        <UserInfo />
      </UserLoader>
      <hr />
      <h5>Resource User Loader</h5>
      <ResourceLoader resourceName="user" resourceUrl="/users/1">
        <UserInfo />
      </ResourceLoader>
      <hr />
      <h5>Resource Book Loader</h5>
      <ResourceLoader resourceName="book" resourceUrl="/books/1">
        <BookInfo />
      </ResourceLoader>
      <hr />
      <h5>Data source book Loader</h5>
      <DataSource getData={() => handleGetData("/books/1")} resourceName="book">
        <BookInfo />
      </DataSource>

      <hr />
      <h5>Data source user Loader</h5>
      <DataSource getData={() => handleGetData("/users/1")} resourceName="user">
        <UserInfo />
      </DataSource>

      <h5>Data source render book Loader</h5>
      <DataSourceWithRender
        getData={() => handleGetData("/books/1")}
        render={(resource) => <BookInfo book={resource} />}
      />

      <hr />
      <h5>Data source render user Loader</h5>
      <DataSourceWithRender
        getData={() => handleGetData("/users/1")}
        render={(resource) => <UserInfo user={resource} />}
      />
    </>
  );
};

export default Container;
