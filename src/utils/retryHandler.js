async function retryOperation(operation, retries = 3) {

  for (let i = 0; i < retries; i++) {

    try {

      return await operation();

    } catch (error) {

      console.log(`Retry Attempt ${i + 1}`);

      if (i === retries - 1) {
        throw error;
      }
    }
  }
}

module.exports = retryOperation;