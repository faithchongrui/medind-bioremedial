const webpack = require("webpack")
const webpackResolve = require("craco-webpack-resolve")

module.exports = {
    plugins: [{ 
        plugin: webpackResolve,
        options: {
            resolve: {
                fallback: {

                }
            } 
        }
    }]
};

