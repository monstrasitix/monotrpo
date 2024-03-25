import { merge } from "webpack-merge";
import { common } from "./webpack.common";

export default function () {
    return merge(common(), {
        mode: "production",
    });
}
