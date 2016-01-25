module.exports = function checkModuleAvailability(module) {
    try {
        require.resolve(module)
    } catch (e) {
        console.error('###############################################################');
        console.error('# Please add ' + module + ' to your project package.json');
        console.error('###############################################################');
        process.exit(1);
    }
}
