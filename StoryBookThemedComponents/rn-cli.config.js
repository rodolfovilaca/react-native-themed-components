var path = require("path");

const modulesToBlacklist = [
    "@react-native-community/bob",
    "@types/jest",
    "@types/react",
    "@types/react-native",
    "react-native",
    "react",
    "react-native-gesture-handler",
    "react-native-reanimated",
    "tslint",
    "typedoc",
];

const regex = modulesToBlacklist
    .map(mtb => `${path.resolve(__dirname).replace('StoryBookThemedComponents', '')}/node_modules/${mtb}`)
    .join('|')

console.log(new RegExp(regex))

var config = {
    resolver: {
        extraNodeModules: new Proxy({}, {
          get: (target, name) => path.join(process.cwd(), `node_modules/${name}`),
        }),
        blacklistRE: new RegExp(regex)
    },
    projectRoot: path.resolve(__dirname),
    watchFolders: [
        path.resolve(__dirname, "../"),
      ],

}
module.exports = config;