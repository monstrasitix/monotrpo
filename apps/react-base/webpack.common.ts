import { Configuration } from "webpack";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";
import HTMLWebpackPlugin from "html-webpack-plugin";

import { resolve } from "path";

export function root(path: string): string {
    return resolve(__dirname, path);
}

export function common(): Configuration {
    return {
        entry: root("./src/main.ts"),
        output: {
            path: root("./dist/js"),
            filename: "[name].bundle.js",
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/i,
                    use: "ts-loader",
                },
            ],
        },
        resolve: {
            extensions: [".js", ".ts", ".tsx"],
            plugins: [new TsconfigPathsPlugin()],
        },
        plugins: [
            new HTMLWebpackPlugin({
                template: root("../../public/index.html"),
            }),
        ],
    };
}
