import React from "react";
import {Scene} from "react-native-router-flux";
import HomePage from "./views/HomePage";

const Scenes = (
    <Scene key="root">
        <Scene key="home" hideNavBar component={HomePage} title="Game of Thrones"/>
    </Scene>
)

export default Scenes;