// import React from 'react';
// import Box from './Box'; 
// // import <Navbar></Navbar>

// function App() {
//   return (
//     <div>
//       <h1>Boxes with Descriptions</h1>
//       <div>
//         <Box description="Box 1" />
//         <Box description="Box 2" />
//         <Box description="Box 3" />
//       </div>
//     </div>
//   );
// }

// export default App;
// import React from 'react';
// import Navbar from './Navbar'; // Importing the Navbar component from Navbar.js

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <div style={{ marginTop: '60px', padding: '20px' }}>
//         {/* Content of the page */}
//         <h1>Main Content</h1>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
//       </div>
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import AutoSlideBoxes from './AutoSlideBoxes';

// const boxes = [
//   { imageUrl: 'https://via.placeholder.com/300', title: 'Box 1' },
//   { imageUrl: 'https://via.placeholder.com/300', title: 'Box 2' },
//   { imageUrl: 'https://via.placeholder.com/300', title: 'Box 3' },
// ];

// function App() {
//   return (
//     <div>
//       <h1>Horizontal Auto Sliding Boxes</h1>
//       <AutoSlideBoxes boxes={boxes} interval={3000} />
//     </div>
//   );
// }

// export default App;
// import React from 'react';
// import BoxWithImageAndText from './BoxWithImageAndText'; // Assuming the BoxWithImageAndText component is in a separate file

// function App() {
//   const boxes = [
//     {
//       imageUrl: 'https://via.placeholder.com/150',
//       text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     },
//     {
//       imageUrl: 'https://via.placeholder.com/150',
//       text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     },
//     {
//       imageUrl: 'https://via.placeholder.com/150',
//       text: 'Ut  veniam, quis nostrud exerboris nisi ut aliquip ex ea commodo consequat.',
//     },
//   ];

//   // Ensure there are at least 5 boxes
//   while (boxes.length < 5) {
//     boxes.push({ imageUrl: 'https://via.placeholder.com/150', text: 'Additional box' });
//   }

//   return (
//     <div style={{ width: '100%', height: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
//       {boxes.map((box, index) => (
//         <BoxWithImageAndText
//           key={index}
//           imageUrl={box.imageUrl}
//           text={box.text}
//         />
//       ))}
//     </div>
//   );
// }

// export default App;
// App.js
// import React from 'react';
// import PopupButton from './PopupButton';

// function App() {
//   return (
//     <div className="App">
//       <PopupButton />
//     </div>
//   );
// }

// export default App;
import React from 'react';
import PopupContainer from './PopupContainer';

function App() {
  return (
    <div className="App">
      <PopupContainer />
    </div>
  );
}

export default App;

