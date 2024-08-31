// // // import { createGlobalStyle } from 'styled-components';

// // // const GlobalStyles = createGlobalStyle`
// // //   * {
// // //     box-sizing: border-box;
// // //     margin: 0;
// // //     padding: 0;
// // //   }

// // //   body {
// // //     font-family: Arial, sans-serif;
// // //     line-height: 1.6;
// // //     background-color: #f4f4f4;
// // //     color: #333;
// // //   }

// // //   .container {
// // //     max-width: 1200px;
// // //     margin: 0 auto;
// // //     padding: 1rem;
// // //   }

// // //   h1, h2 {
// // //     margin-bottom: 1rem;
// // //   }
// // // `;

// // // export default GlobalStyles;
// // import { createGlobalStyle } from 'styled-components';

// // const GlobalStyles = createGlobalStyle`
// //   * {
// //     margin: 0;
// //     padding: 0;
// //     box-sizing: border-box;
// //   }

// //   body {
// //     font-family: Arial, sans-serif;
// //     background-color: #f5f5f5;
// //     padding: 20px;
// //   }

// //   .container {
// //     max-width: 1200px;
// //     margin: auto;
// //     padding: 20px;
// //   }

// //   h1 {
// //     text-align: center;
// //     margin-bottom: 20px;
// //   }
// // `;

// // export default GlobalStyles;


// // src/styles/GlobalStyles.js
// import { createGlobalStyle } from 'styled-components';

// const GlobalStyles = createGlobalStyle`
//   body {
//     font-family: 'Arial', sans-serif;
//     background-color: #f4f4f4;
//     margin: 0;
//     padding: 0;
//   }

//   .container {
//     max-width: 1200px;
//     margin: 0 auto;
//     padding: 20px;
//   }

//   h1 {
//     color: #333;
//     text-align: center;
//     margin-bottom: 30px;
//   }
// `;

// export default GlobalStyles;
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f5f5f5;
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  h1 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 2rem;
    color: #333;
  }
`;

export default GlobalStyles;
