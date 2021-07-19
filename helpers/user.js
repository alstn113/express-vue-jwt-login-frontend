import { store } from "../src/store/store";
import _ from "lodash";
import axios from "axios";

export const checkUserData = async () => {
  if (store.state.auth.accessToken) {
    if (_.isEmpty(store.state.auth.authUser)) {
      const res = await axios.get("/api/user/current");
      if (res.data) {
        await store.dispatch("setUserData", res.data);
      }
    }
  }
};
