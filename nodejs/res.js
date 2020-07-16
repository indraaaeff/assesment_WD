'use strict';

exports.ok = function(values, res) {
  var data = {
      'success': 200,
      'message': 'Data found.',
      'data': values
  };
  res.json(data);
  res.end();
};