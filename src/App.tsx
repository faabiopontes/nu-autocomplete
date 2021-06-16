import GitHubAutocomplete from "./components/GitHubAutocomplete";
import GlobalStyle from './styles/global';
import AppProvider from './hooks/index';


const App = () => (
  <AppProvider>
    <h1>Welcome to NUAutocomplete</h1>
    <p>Below you should type any term and it will be searched through all React GitHub issues</p>
    <p>When the text field is selected you can use the UP and DOWN keyboard keys to go through the results shown</p>
    <p>By clicking or pressing Enter when a specific issue is selected a new tab will open with their page</p>
    <GitHubAutocomplete />
    {/**
     * Pensando em testes aonde que seria o melhor lugar para colocar as coisas?
     * - Pensar bastante no Single Responsability
     * - Pensar na escabilidade e facilidade de dar manutenção
     * App
     *  - GitHubAutocomplete repository="facebook/react"
     *    evento: onKeyDown fazendo busca na API
     *    - para buscar na API vamos utilizar a seguinte URL:
     *      https://api.github.com/search/issues?q=term+repo%3Afacebook%2Freact
     *    - Acho que isso é o básico, depois pensamos no avançado dai
     *    - Fora que podemos refatorar a qualquer momento
     *    - Não precisa ser antes de precisar ser refatorado
     *    - Autocomplete onKeyDown={onKeyDown}
     *      - Esse componente não precisa saber os resultados, ele só precisa chamar o evento
     *    - IssuesListComponent items={Issues}
     *      - Aqui sim vamos ter as issues filtradas
     *      - Vamos poder organizar aqui como vai ser a visualização também
     */}

    <GlobalStyle />
  </AppProvider>
);

export default App;
