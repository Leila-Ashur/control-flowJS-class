
let success = true;
const performTask = async () => {
  try {
    await performTask();
  } catch (error) {
    console.error(error);
  }
};