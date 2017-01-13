import Reactotron from "reactotron-react-native";
import { reactotronRedux } from 'reactotron'

Reactotron
  .configure({name: 'GameOfThrones'})
  .use(reactotronRedux())
  .connect();