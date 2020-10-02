import api from "@/utils/http";
import * as M from "./mutation-types";

export function initializePlans(context) {
  api.get("/subscriptions/plan/").then(response => {
    context.commit(M.SET_PLANS, response.data);
  });
}
