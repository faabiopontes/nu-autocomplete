import GitHubAutocomplete from "../../components/GitHubAutocomplete/index";

const Home = () => (
  <>
    <h1>Welcome to NUAutocomplete</h1>
    <p>
      Below you should type any term and it will be searched through all React
      GitHub issues
    </p>
    <p>
      When the text field is selected you can use the <b>UP</b> or <b>DOWN</b>{" "}
      keyboard keys to go through the results shown
    </p>
    <p>
      By clicking or pressing <b>ENTER</b> when a specific issue is selected a
      new tab will open with their page
    </p>
    <GitHubAutocomplete />
  </>
);

export default Home;