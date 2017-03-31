// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar = new ProgressBar.Circle(container, {
  color: '#08A1D0',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1000,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#0336EF', width: 1 },
  to: { color: '#08A1D0', width: 2 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});
bar.text.style.fontFamily = '"arial", Helvetica, sans-serif';
bar.text.style.fontSize = '2rem';

bar.animate(.9);  // Number from 0.0 to 1.0






//second circle
var bar = new ProgressBar.Circle(container1, {
  color: '#08A1D0',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1000,
  text: {
    autoStyleContainer1: false
  },
  from: { color: '#0336EF', width: 1 },
  to: { color: '#08A1D0', width: 2 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});
bar.text.style.fontFamily = '"arial", Helvetica, sans-serif';
bar.text.style.fontSize = '2rem';

bar.animate(.85);  // Number from 0.0 to 1.0


//third circle
var bar = new ProgressBar.Circle(container2, {
  color: '#08A1D0',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1000,
  text: {
    autoStyleContainer2: false
  },
  from: { color: '#0336EF', width: 1 },
  to: { color: '#08A1D0', width: 2 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});
bar.text.style.fontFamily = '"arial", Helvetica, sans-serif';
bar.text.style.fontSize = '2rem';

bar.animate(.8);  // Number from 0.0 to 1.0



//fourth circle
var bar = new ProgressBar.Circle(container3, {
  color: '#08A1D0',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1000,
  text: {
    autoStyleContainer3: false
  },
  from: { color: '#0336EF', width: 1 },
  to: { color: '#08A1D0', width: 2 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});
bar.text.style.fontFamily = '"arial", Helvetica, sans-serif';
bar.text.style.fontSize = '2rem';

bar.animate(.75);  // Number from 0.0 to 1.0






//fifth circle
var bar = new ProgressBar.Circle(container4, {
  color: '#08A1D0',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1000,
  text: {
    autoStyleContainer4: false
  },
  from: { color: '#0336EF', width: 1 },
  to: { color: '#08A1D0', width: 2 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});
bar.text.style.fontFamily = '"arial", Helvetica, sans-serif';
bar.text.style.fontSize = '2rem';

bar.animate(.7);  // Number from 0.0 to 1.0
