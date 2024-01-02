// JavaScript
// Check if SpeechRecognition is supported and get the appropriate object
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

// Create a new SpeechRecognition instance
const rec = new SpeechRecognition();

// Set the language and continuous mode
rec.lang = 'en-US';
rec.continuous = true;

// Event handler when speech recognition results are available
rec.onresult = function (e) {
  // List of accepted color names
  const acceptedColors = [
    'aqua',
    'azure',
    'beige',
    'bisque',
    'black',
    'blue',
    'brown',
    'chocolate',
    'coral',
    'crimson',
    'cyan',
    'fuchsia',
    'ghostwhite',
    'gold',
    'goldenrod',
    'gray',
    'green',
    'indigo',
    'ivory',
    'khaki',
    'lavender',
    'lime',
    'linen',
    'magenta',
    'maroon',
    'moccasin',
    'navy',
    'olive',
    'orange',
    'orchid',
    'peru',
    'pink',
    'plum',
    'purple',
    'red',
    'salmon',
    'sienna',
    'silver',
    'snow',
    'tan',
    'teal',
    'thistle',
    'tomato',
    'turquoise',
    'violet',
    'white',
    'yellow',
  ];

  // Loop through the results
  for (let i = e.resultIndex; i < e.results.length; i++) {
    // Extract the transcribed speech and convert to lowercase
    const script = e.results[i][0].transcript.toLowerCase().trim();

    // Check if the transcribed color is in the accepted list
    if (acceptedColors.includes(script)) {
      // Change the background color of the body
      document.body.style.backgroundColor = script;
    }

    // Check if the transcribed color is black, adjust text color accordingly
    if (script === 'black') {
      document.body.style.color = 'white';
    } else {
      document.body.style.color = 'black';
    }
  }
};

// Start speech recognition
rec.start();
