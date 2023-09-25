import HomeView from "../views/HomeView.vue"
import OrganizationsListView from "../views/organizations/OrganizationsListView.vue"
import OrganizationDetailView from "../views/organizations/OrganizationDetailView.vue"
import DatasetDetailView from "../views/datasets/DatasetDetailView.vue"
import DatasetsListView from "../views/datasets/DatasetsListView.vue"
import SimplePageView from "../views/SimplePageView.vue"
import config from "@/config";

export default class RouterFetch {
    generateRouteItems() {
        let items = [];
        config.website__menu_items.forEach((item) => {
            const component = null
            if (item.type === "component") {
                if (item.id === "datasets") {
                    items.push({
                        path: item.linkPage,
                        name: item.id,
                        component: DatasetsListView
                    });
                    items.push({
                        path: item.linkPage + "/:did",
                        name: item.id + "_detail",
                        component: DatasetDetailView
                    });
                }
                if (item.id === "organizations") {
                    items.push({
                        path: item.linkPage,
                        name: item.id,
                        component: OrganizationsListView
                    });
                    items.push({
                        path: item.linkPage + "/:oid",
                        name: item.id + "_detail",
                        component: OrganizationDetailView
                    });
                }
                if (item.id === "home") {
                    items.push({
                        path: item.linkPage,
                        name: item.id,
                        component: HomeView
                    });
                }
            } else if (item.type === "page") {
                items.push({
                    path: item.linkPage,
                    name: item.id,
                    component: SimplePageView,
                    meta: { title: item.name },
                    props: { url: item.url },
                });
            }
        });
        return items;
    }
}