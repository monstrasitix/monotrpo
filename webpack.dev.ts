import "webpack-dev-server";

import { merge } from "webpack-merge";
import { common, root } from "./webpack.common";

export default function () {
    return merge(common(), {
        mode: "development",
        devServer: {
            historyApiFallback: true,
            hot: true,
            liveReload: true,
            port: 8080,

            static: {
                publicPath: root("./public"),
            },
        },
    });
}
