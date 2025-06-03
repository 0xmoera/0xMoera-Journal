const axios = require('axios');

async function getTransactionHistory(address, apiKey) {
  const url = `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&sort=desc&apikey=${apiKey}`;
  try {
    const response = await axios.get(url);
    return response.data.result;
  } catch (error) {
    console.error("Error fetching transactions:", error.message);
    return [];
  }
}
