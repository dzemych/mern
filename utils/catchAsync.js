// module.exports = func => (req, res, next) => {
//    return func(req, res, next).catch(next)
// }

module.exports = fn => {
   return (req, res, next) => {
      fn(req, res, next).catch(next);
   };
};
