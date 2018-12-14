module.exports = {
  isAuth: (req,res,next) => {

    var token = req.headers.token;
    const realToken = 'mytoken';
    if (token == realToken) {
      next();
    } else {
      res.status(401).json({
        message: 'Token is Invalid',
      });
    }

  }
};
