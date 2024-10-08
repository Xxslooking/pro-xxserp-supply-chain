/** @odoo-module **/

import {registerModel} from "@mail/model/model_core";
import {attr, one} from "@mail/model/model_field";

registerModel({
    name: "ir.model.review",
    fields: {
        /**
         * Determines the name of the views that are available for this model.
         */
        availableWebViews: attr({
            compute() {
                return ["kanban", "list", "form", "activity"];
            },
        }),
        reviewGroup: one("ReviewGroup", {
            inverse: "irModel",
        }),
        iconUrl: attr(),
        id: attr({
            identifying: true,
        }),
        model: attr({
            required: true,
        }),
        name: attr(),
    },
});
