/**
 * Background Cloud Function to be triggered
 *
 * @param {object} event The event payload.
 * @param {object} context The event metadata.
 */
exports.demoEntryPoint = async (event, context) => {
  try {
    console.log('Entered demoEntryPoint and Done');
  } catch (err) {
    console.error(`Error, ${err.message}!`);
  }
};
