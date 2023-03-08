module.exports = {
  async sendText(req, res) {
    return res.status(200).json({
      message: 'caio castro chegou no rolê',
    });
  },
};
