import React from 'react';

// const ListItem = item => <li>{item}</li>

// export default ({ items }) => (
//     <ul>
//         {items.map((item, i) => (
//             <li key={i}>
//                 {item}
//             </li>
//         )}
//     </ul>
// )
 
export default ({ items }) => (
    <ul>
        {items.map((item, i) => 
            <li key={i}>
                {item}
            </li>
        )}
    </ul>
)


// const nums = [1,2,3,4,5];
// // const newNums = [];
// // for (let i = 0; i < nums.length; i++)
// // {
// //     newNums.push(nums[i] * i);
// // }

// function double(num) {
//     return num * 2;
// }

// const newNums = nums.map(double);

// console.log(newNums);