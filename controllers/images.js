const axios = require('axios');

exports.get_image = async function getUser(req, res) {
  try {
    const response = await axios.get('http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true');
    res.send(response.data)
  } catch (error) {
    res.send(error)
  }
}
