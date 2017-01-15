import Reactotron from "reactotron-react-native";
import { reactotronRedux } from 'reactotron-redux'

Reactotron
  .configure({name: 'GameOfThrones'})
  .use(reactotronRedux())
  .connect();