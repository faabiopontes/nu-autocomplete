import GitHubAutocomplete from "./components/GitHubAutocomplete";
import GlobalStyle from './styles/global';

const App = () => (
  <>
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
  </>
);

export default App;
