/* This file should make it impossible for native-level web apps to access all NodeJS modules/features or the users' files without permission. */
module.exports = function() {
    //replace `global.require` with a system-controlled function
    //Replace `global.__dirname` & `global.__filename` with new custom paths
    //Block access to `global.process`
    //[More_Steps]...
};