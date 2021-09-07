/*
  Ascii Morph
  @author: Tim Holman (http://tholman.com)
  The MIT License (MIT)
  Copyright (c) 2016 Tim Holman
  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

// works best with max 50 x 50 chars
// Ideas
// Star wars / some Fandom, R2d2, bender, Gameboy, aperture science, Python, Space

var asciis = [
  [
    " ",
    " ",
    " ",
    " ",
    " ",
    " "
  ],
  [
    "  _____             _____            _             ",
    " |_   _| __ _   _  |_   _|   _ _ __ (_)_ __   __ _ ",
    "   | || '__| | | |   | || | | | '_ \\| | '_ \\ / _` |",
    "   | || |  | |_| |   | || |_| | |_) | | | | | (_| |",
    "   |_||_|   \\__, |   |_| \\__, | .__/|_|_| |_|\\__, |",
    "            |___/        |___/|_|            |___/ "
  ],
  [
    " ",
    " ",
    " ",
    " ",
    " ",
    " "
  ],
  [
    "  ____          _       ____              _ ",
    " / ___|___   __| | __ _| __ )  ___   ___ | |",
    "| |   / _ \\ / _` |/ _` |  _ \\ / _ \\ / _ \\| |",
    "| |__| (_) | (_| | (_| | |_) | (_) | (_) | |",
    " \\____\\___/ \\__,_|\\__,_|____/ \\___/ \\___/|_|"
  ],

[
  " ",
  " ",
  " ",
  " ",
  " ",
  " "
],
[
  "$$$$$$$\\                       $$$$$$\\                      ",
  "$$  __$$\\                     $$  __$$\\                     ",
  "$$ |  $$ | $$$$$$\\ $$\\    $$\\ $$ /  $$ | $$$$$$\\   $$$$$$$\\ ",
  "$$ |  $$ |$$  __$$\\\\$$\\  $$  |$$ |  $$ |$$  __$$\\ $$  _____|",
  "$$ |  $$ |$$$$$$$$ |\\$$\\$$  / $$ |  $$ |$$ /  $$ |\\$$$$$$\\  ",
  "$$ |  $$ |$$   ____| \\$$$  /  $$ |  $$ |$$ |  $$ | \\____$$\\ ",
  "$$$$$$$  |\\$$$$$$$\\   \\$  /    $$$$$$  |$$$$$$$  |$$$$$$$  |",
  "\\_______/  \\_______|   \\_/     \\______/ $$  ____/ \\_______/ ",
  "                                        $$ |                ",
  "                                        $$ |                ",
  "                                        \\__|                "
],

[
"                             /",
"                            /",
"                           /;",
"                          //",
"                         ;/",
"                       ,//",
"                   _,-' ;_,,",
"                _,'-_  ;|,'",
"            _,-'_,..--. |",
"    ___   .'-'_)'  ) _)\\|      ___",
"  ,'\"\"\"`'' _  )   ) _)  ''--'''_,-'",
"-={-o-  /|    )  _)  ) ; '_,--''",
"  \\ -' ,`.  ) .)  _)_,''|",
"   `.\"(   `------''     /",
"     `.\\             _,'",
"       `-.____....-\\\\",
"                 || \\\\",
"                 // ||",
"                //  ||",
"            _-.//_ _||_,",
"              ,'  ,-'/"
],
[
  "     .--------.",
  "    / .------. \\",
  "   / /        \\ \\",
  "   | |        | |",
  "  _| |________| |_",
  ".' |_|        |_| '.",
  "'._____ ____ _____.'",
  "|     .'____'.     |",
  "'.__.'.'    '.'.__.'",
  "'.__  |      |  __.'",
  "|   '.'.____.'.'   |",
  "'.____'.____.'____.'",
  "'.________________.'",
  ],



[
"         ____",
"        o8%8888,",
"      o88%8888888.",
"     8'-    -:8888b",
"    8'         8888",
"   d8.-=. ,==-.:888b",
"   >8 `~` :`~' d8888",
"   88         ,88888",
"   88b. `-~  ':88888",
"   888b ~==~ .:88888",
"   88888o--:':::8888",
"   `88888| :::' 8888b",
"   8888^^'       8888b",
"  d888           ,%888b.",
" d88%            %%%8--'-.",
"/88:.__ ,       _%-' ---  -",
"    '''::===..-'   =  --.  `",
],
[
"                _ooOoo_",
"               o8888888o",
"               88\" . \"88",
"               (| -_- |)",
"               O\\  =  /O",
"            ____/\`---\'\\____",
"          .\'  \\\\|     |//  \`.",
"         /  \\\\|||  :  |||//  \\",
"        /  _||||| -:- |||||_  \\",
"        |   | \\\\\\  -  /'| |   |",
"        | \\_|  \`\\`---'//  |_/ |",
"        \\  .-\\__ \`-. -'__/-.  /",
"      ___\`. .'  /--.--\\  \`. .'___",
"   .\"\" '<  \`.___\\_<|>_/___.' _> \\\"\".",
"  | | :  \`- \\\`. ;\`. _/; .'/ /  .' ; |",
"  \\  \\ \`-.   \\_\\_\`. _.'_/_/  -' _.' /",
"===\`-.\`___\`-.__\\ \\___  /__.-'_.'_.-'===",
"                \`=--=-'    "
],

 [
"      _      _      _",
"   __(.)< __(.)> __(.)=",
"   \\___)  \\___)  \\___)  ",
"          _      _      _",
"       __(.)< __(.)> __(.)=",
"       \\___)  \\___)  \\___)   ",
"      _      _      _",
"   __(.)< __(.)> __(.)=",
"   \\___)  \\___)  \\___)   ",
"          _      _      _",
"       __(.)< __(.)> __(.)=",
"       \\___)  \\___)  \\___)  "
 ]
];



import { useRef, useEffect } from 'react'

export default function Morph() {
  var canvas = useRef('')
  var AsciiMorph = (function() {
    var element = null;
    var canvasDimensions = {};
    var renderedData = [];
    var framesToAnimate = [];
    var myTimeout = null;
  
    function extend(target, source) {
      for (var key in source) {
        if (!(key in target)) {
          target[key] = source[key];              
        }
      }
      return target;
    }
    
    function repeat(pattern, count) {
        if (count < 1) return '';
        var result = '';
        while (count > 1) {
            if (count & 1) result += pattern;
            count >>= 1, pattern += pattern;
        }
        return result + pattern;
    }
    
    function replaceAt(string, index, character ) {
      return string.substr(0, index) + character + string.substr(index+character.length);
    }
  
    function init(el, canvasSize) {
      element = el;
      canvasDimensions = canvasSize;
    }
    
    function squareOutData(data) {
       var i;
      var renderDimensions = {
        x: 0,
        y: data.length
      };
  
      // Calculate centering numbers
      for( i = 0; i < data.length; i++ ) {
        if( data[i].length > renderDimensions.x) {
          renderDimensions.x = data[i].length
        }
      }
      
      // Pad out right side of data to square it out
      for( i = 0; i < data.length; i++ ) {
        if( data[i].length < renderDimensions.x) {
          data[i] = (data[i] + repeat(' ', renderDimensions.x - data[i].length ));
        }
      }
      
      var paddings = {
        x: Math.floor((canvasDimensions.x - renderDimensions.x) / 2),
        y: Math.floor((canvasDimensions.y - renderDimensions.y) / 2)
      }
      
      // Left Padding
      for( var i = 0; i < data.length; i++ ) {
        data[i] = repeat(' ', paddings.x) + data[i] + repeat(' ', paddings.x);
      }
      
      // Pad out the rest of everything
      for( var i = 0; i < canvasDimensions.y; i++ ) {
        if( i < paddings.y) {
          data.unshift( repeat(' ', canvasDimensions.x));
        } else if (i > (paddings.y + renderDimensions.y)) {
          data.push( repeat(' ', canvasDimensions.x));
        }
      }
      
      return data;
    }
    
    // Crushes the frame data by 1 unit.
    function getMorphedFrame(data) {
      
      var firstInLine, lastInLine = null;
      var found = false;
      for( var i = 0; i < data.length; i++) {
        
        var line = data[i];
        firstInLine = line.search(/\S/);
        if( firstInLine === -1) {
          firstInLine = null;
        }
        
        for( var j = 0; j < line.length; j++) {
          if( line[j] != ' ') {
            lastInLine = j;
          }
        }
        
        if( firstInLine !== null && lastInLine !== null) {
          data = crushLine(data, i, firstInLine, lastInLine)
          found = true;
        }
    
        firstInLine = null, lastInLine = null;
      }
      
      if( found ) {
        return data;
      } else {
        return false;
      }
    }
    
    function crushLine(data, line, start, end) {
      
      var centers = {
        x: Math.floor(canvasDimensions.x / 2),
        y: Math.floor(canvasDimensions.y / 2)
      }
      
      var crushDirection = 1;
      if( line > centers.y ) {
        crushDirection = -1;
      }
      
      var charA = data[line][start];
      var charB = data[line][end];
  
      // DEBUG
      if (data[line + crushDirection] === undefined) {
        console.log('data[', line, '+', crushDirection, ']', data[line + crushDirection])
      }
      
      data[line] = replaceAt(data[line], start, " ");
      data[line] = replaceAt(data[line], end, " ");
  
      if( !((end - 1) == (start + 1)) && !(start === end) && !((start + 1) === end)) {
        data[line + crushDirection] = replaceAt(data[line + crushDirection], (start + 1), '+*/\\'.substr(Math.floor(Math.random()*'+*/\\'.length), 1));
        data[line + crushDirection] = replaceAt(data[line + crushDirection], (end - 1), '+*/\\'.substr(Math.floor(Math.random()*'+*/\\'.length), 1));
      } else if ((((start === end) || (start + 1) === end)) && ((line + 1) !== centers.y && (line - 1) !== centers.y && line !== centers.y)) {
        data[line + crushDirection] = replaceAt(data[line + crushDirection], (start), '+*/\\'.substr(Math.floor(Math.random()*'+*/\\'.length), 1));
        data[line + crushDirection] = replaceAt(data[line + crushDirection], (end), '+*/\\'.substr(Math.floor(Math.random()*'+*/\\'.length), 1));
      }
      
      return data;
    }
    
    function render(data) {
      var ourData = squareOutData(data.slice());
      renderSquareData(ourData);
    }
    
    function renderSquareData(data) {
      
      canvas.current.innerHTML = '';
      // canvas.current.innerText
      for( var i = 0; i < data.length; i++ ) {
        const newLine = data[i].split(' ').join('&nbsp');
        canvas.current.innerHTML = canvas.current.innerHTML + newLine  + '\n';
      }
      
      renderedData = data;
    }
    
    // Morph between whatever is current, to the new frame
    function morph(data) {
      if (canvas.current !== null) {
        clearTimeout(myTimeout);
        var frameData = prepareFrames(data.slice());
        animateFrames(frameData);
      }
    }
    
    function prepareFrames(data) {
      
      var deconstructionFrames = [];
      var constructionFrames = [];
  
      var clonedData = renderedData
      
      // If its taking more than 100 frames, its probably somehow broken
      // Get the deconscrution frames
      for(var i = 0; i < 100; i++) {
        var newData = getMorphedFrame(clonedData);
        if( newData === false) {
          break;
        }
        deconstructionFrames.push(newData.slice(0)); 
        clonedData = newData;
      }
      
      // Get the constuction frames for the new data
      var squareData = squareOutData(data);
      constructionFrames.unshift(squareData.slice(0));
      for( var i = 0; i < 100; i++ ) {
        var newData = getMorphedFrame(squareData);
        if( newData === false) {
          break;
        }
        constructionFrames.unshift(newData.slice(0));
        squareData = newData;
      }
      
      return deconstructionFrames.concat(constructionFrames)
    }
    
    function animateFrames(frameData) {
      framesToAnimate = frameData;
      animateFrame();
    }
    
    function animateFrame() {
      myTimeout = setTimeout(function() {
        
        renderSquareData(framesToAnimate[0]);
        framesToAnimate.shift();
        if( framesToAnimate.length > 0 ) {
          animateFrame();
        }
      }, 20)
  
      // framesToAnimate
    }
  
    function main(element, canvasSize) {
      
      if( !element || !canvasSize ) {
        console.log("sorry, I need an element and a canvas size");
        return;   
      }
      
      init(element, canvasSize);
    }
  
    return extend(main, {
      render: render,
      morph: morph
    });
    
  })();
  useEffect(() => {
    var element = canvas.current
    AsciiMorph(element, {x: 51,y: 28});

    AsciiMorph.render(asciis[0]);
    var currentIndex = 2;

    setTimeout(function() {
      AsciiMorph.morph(asciis[1]);
    }, 1000);
    
    setInterval(function() {
      AsciiMorph.morph(asciis[currentIndex]);
      currentIndex++;
      currentIndex%= asciis.length;
    }, 3000);

  }, [])

  return (
    <span className="morph-section" ref={canvas}></span>
  )
}
