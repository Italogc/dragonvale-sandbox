// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// dvbox/controller.js
//
// by drow <drow@bin.sh>
// http://creativecommons.org/publicdomain/zero/1.0/
//
// requires Prototype

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// init sandbox

  function init_sandbox () {
    Object.keys(dragons).sort().each(function (key) {
      var attr = { 'value': key };
      var name = dragons[key]['name'];

      $('d1').insert(Builder.node('option',attr,name));
      $('d2').insert(Builder.node('option',attr,name));
    });
    $('d1').observe('change',update_results);
    $('d2').observe('change',update_results);
    $('beb').observe('change',update_results);

    update_results();
  }

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// update results

  function update_results () {
    var d1 = $('d1').getValue();
    var d2 = $('d2').getValue();
    var beb = $('beb').getValue();
    var list = breed_calc(d1,d2,beb);

    if (list) {
      $('results').update('');

      list.sort().each(function (key) {
        var name = dragons[key]['name'];
        $('results').insert(Builder.node('tr',Builder.node('td',name));
      });
    } else {
      $('results').update('No dragons');
    }
  }

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// showtime

  document.observe('dom:loaded',init_sandbox);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
