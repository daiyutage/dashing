/*
 * Licensed under the Apache License, Version 2.0
 * See accompanying LICENSE file.
 */
angular.module('dashing.util.color', [])

  .factory('dashing.util.color', function() {
    'use strict';

    return {
      /**
       * Return pre-defined color palette.
       */
      palette: {
        blue: 'rgb(0,119,215)',
        blueishGreen: 'rgb(41,189,181)',
        orange: 'rgb(255,127,80)',
        purple: 'rgb(110,119,215)',
        skyBlue: 'rgb(91,204,246)',
        darkBlue: 'rgb(102,168,212)',
        darkGray: 'rgb(92,92,97)',
        darkPink: 'rgb(212,102,138)',
        darkRed: 'rgb(212,102,138)',
        lightBlue: 'rgb(35,183,229)',
        lightGreen: 'rgb(169,255,150)'
      },
      /** Convert a condition to a css color */
      conditionToColor: function(condition) {
        switch (condition) {
          case 'good':
            return '#5cb85c';
          case 'concern':
            return '#f0ad4e';
          case 'danger':
            return '#d9534f';
          default:
            return '#aaa';
        }
      },
      /** Return a lighter color. Level is a number in range [-1, 1] */
      lighter: function(color, level) {
        return zrender.tool.color.lift(color, level);
      },
      /** Return a color with alpha chanel. Transparency is a number in range [0, 1] */
      alpha: function(color, transparency) {
        return zrender.tool.color.alpha(color, transparency);
      }
    };
  })
;