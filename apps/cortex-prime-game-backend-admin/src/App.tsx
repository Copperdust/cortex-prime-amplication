import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { CharacterList } from "./character/CharacterList";
import { CharacterCreate } from "./character/CharacterCreate";
import { CharacterEdit } from "./character/CharacterEdit";
import { CharacterShow } from "./character/CharacterShow";
import { TrackerList } from "./tracker/TrackerList";
import { TrackerCreate } from "./tracker/TrackerCreate";
import { TrackerEdit } from "./tracker/TrackerEdit";
import { TrackerShow } from "./tracker/TrackerShow";
import { TraitSetList } from "./traitSet/TraitSetList";
import { TraitSetCreate } from "./traitSet/TraitSetCreate";
import { TraitSetEdit } from "./traitSet/TraitSetEdit";
import { TraitSetShow } from "./traitSet/TraitSetShow";
import { TraitList } from "./trait/TraitList";
import { TraitCreate } from "./trait/TraitCreate";
import { TraitEdit } from "./trait/TraitEdit";
import { TraitShow } from "./trait/TraitShow";
import { ItemList } from "./item/ItemList";
import { ItemCreate } from "./item/ItemCreate";
import { ItemEdit } from "./item/ItemEdit";
import { ItemShow } from "./item/ItemShow";
import { ItemBonusList } from "./itemBonus/ItemBonusList";
import { ItemBonusCreate } from "./itemBonus/ItemBonusCreate";
import { ItemBonusEdit } from "./itemBonus/ItemBonusEdit";
import { ItemBonusShow } from "./itemBonus/ItemBonusShow";
import { StatusList } from "./status/StatusList";
import { StatusCreate } from "./status/StatusCreate";
import { StatusEdit } from "./status/StatusEdit";
import { StatusShow } from "./status/StatusShow";
import { TimeList } from "./time/TimeList";
import { TimeCreate } from "./time/TimeCreate";
import { TimeEdit } from "./time/TimeEdit";
import { TimeShow } from "./time/TimeShow";
import { SeasonList } from "./season/SeasonList";
import { SeasonCreate } from "./season/SeasonCreate";
import { SeasonEdit } from "./season/SeasonEdit";
import { SeasonShow } from "./season/SeasonShow";
import { WeatherList } from "./weather/WeatherList";
import { WeatherCreate } from "./weather/WeatherCreate";
import { WeatherEdit } from "./weather/WeatherEdit";
import { WeatherShow } from "./weather/WeatherShow";
import { SeasonColorList } from "./seasonColor/SeasonColorList";
import { SeasonColorCreate } from "./seasonColor/SeasonColorCreate";
import { SeasonColorEdit } from "./seasonColor/SeasonColorEdit";
import { SeasonColorShow } from "./seasonColor/SeasonColorShow";
import { MoonList } from "./moon/MoonList";
import { MoonCreate } from "./moon/MoonCreate";
import { MoonEdit } from "./moon/MoonEdit";
import { MoonShow } from "./moon/MoonShow";
import { ReminderList } from "./reminder/ReminderList";
import { ReminderCreate } from "./reminder/ReminderCreate";
import { ReminderEdit } from "./reminder/ReminderEdit";
import { ReminderShow } from "./reminder/ReminderShow";
import { PlayerList } from "./player/PlayerList";
import { PlayerCreate } from "./player/PlayerCreate";
import { PlayerEdit } from "./player/PlayerEdit";
import { PlayerShow } from "./player/PlayerShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"CortexPrimeGameBackend"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Character"
          list={CharacterList}
          edit={CharacterEdit}
          create={CharacterCreate}
          show={CharacterShow}
        />
        <Resource
          name="Tracker"
          list={TrackerList}
          edit={TrackerEdit}
          create={TrackerCreate}
          show={TrackerShow}
        />
        <Resource
          name="TraitSet"
          list={TraitSetList}
          edit={TraitSetEdit}
          create={TraitSetCreate}
          show={TraitSetShow}
        />
        <Resource
          name="Trait"
          list={TraitList}
          edit={TraitEdit}
          create={TraitCreate}
          show={TraitShow}
        />
        <Resource
          name="Item"
          list={ItemList}
          edit={ItemEdit}
          create={ItemCreate}
          show={ItemShow}
        />
        <Resource
          name="ItemBonus"
          list={ItemBonusList}
          edit={ItemBonusEdit}
          create={ItemBonusCreate}
          show={ItemBonusShow}
        />
        <Resource
          name="Status"
          list={StatusList}
          edit={StatusEdit}
          create={StatusCreate}
          show={StatusShow}
        />
        <Resource
          name="Time"
          list={TimeList}
          edit={TimeEdit}
          create={TimeCreate}
          show={TimeShow}
        />
        <Resource
          name="Season"
          list={SeasonList}
          edit={SeasonEdit}
          create={SeasonCreate}
          show={SeasonShow}
        />
        <Resource
          name="Weather"
          list={WeatherList}
          edit={WeatherEdit}
          create={WeatherCreate}
          show={WeatherShow}
        />
        <Resource
          name="SeasonColor"
          list={SeasonColorList}
          edit={SeasonColorEdit}
          create={SeasonColorCreate}
          show={SeasonColorShow}
        />
        <Resource
          name="Moon"
          list={MoonList}
          edit={MoonEdit}
          create={MoonCreate}
          show={MoonShow}
        />
        <Resource
          name="Reminder"
          list={ReminderList}
          edit={ReminderEdit}
          create={ReminderCreate}
          show={ReminderShow}
        />
        <Resource
          name="Player"
          list={PlayerList}
          edit={PlayerEdit}
          create={PlayerCreate}
          show={PlayerShow}
        />
      </Admin>
    </div>
  );
};

export default App;
