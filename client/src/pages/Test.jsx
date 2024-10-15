// import * as React from "react";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Stack from "@mui/material/Stack";
// import Collapse from "@mui/material/Collapse";
// // import { sizing } from "@mui/system";
// import PrimarySearchAppBar from "./Navbar";
// // import FileExplorer from "./Menu";

// import { RichTreeView } from "@mui/x-tree-view/RichTreeView";

// import { useSpring, animated } from "@react-spring/web";


// // const ShowTreeComponent = (props) => {
// //   const {children, activeTree, selectedTree } = props;

// //   return (
// //     <div hidden={activeTree !== selectedTree}>
// //       {activeTree === selectedTree && <Box mx={2}>{children}</Box>}
// //     </div>
// //   );
// // };

// const SublocationComponent = ({ label }) => (
//   <Typography variant="h4">{label} Component</Typography>
// );

// const MUI_X_PRODUCTS = [
//   {
//     id: "home",
//     label: "Home",
//   },
//   {
//     id: "1.0",
//     label: "location1",
//     children: [
//       { id: "1.1.1", label: "sublocation1" },
//       { id: "1.1.2", label: "sublocation2" },
//       { id: "1.1.3", label: "sublocation3" },
//     ],
//   },
//   {
//     id: "2.0",
//     label: "location2",
//     children: [
//       { id: "2.1.1", label: "sublocation1" },
//       { id: "2.1.2", label: "sublocation2" },
//       { id: "2.1.3", label: "sublocation3" },
//     ],
//   },
//   {
//     id: "3.0",
//     label: "location3",
//     children: [
//       { id: "3.1.1", label: "sublocation1" },
//       { id: "3.1.2", label: "sublocation2" },
//       { id: "3.1.3", label: "sublocation3" },
//     ],
//   },
//   {
//     id: "4.0",
//     label: "location4",
//     children: [
//       { id: "4.1.1", label: "sublocation1" },
//       { id: "4.1.2", label: "sublocation2" },
//       { id: "4.1.3", label: "sublocation3" },
//     ],
//   },
//   {
//     id: "5.0",
//     label: "location5",
//     children: [
//       { id: "5.1.1", label: "sublocation1" },
//       { id: "5.1.2", label: "sublocation2" },
//       { id: "5.1.3", label: "sublocation3" },
//     ],
//   },
//   {
//     id: "6.0",
//     label: "location6",
//     children: [
//       { id: "6.1.1", label: "sublocation1" },
//       { id: "6.1.2", label: "sublocation2" },
//       { id: "6.1.3", label: "sublocation3" },
//     ],
//   },
  
  
  
 
// ];


// // const [activeTree, setActiveTree] = useState();

// // const handleSelect=(event, selectedTree)=> {
// //           setActiveTree(selectedTree);
// // } 

// function TransitionComponent(props) {
//   const style = useSpring({
//     to: {
//       opacity: props.in ? 1 : 0,
//       transform: `translate3d(${props.in ? 0 : 20}px,0,0)`,
//     },
//   });

//   return (
//     <animated.div style={style}>
//       <Collapse {...props} />
//     </animated.div>
//   );
// }

// export default function Test() {

//   const [selectedItem, setSelectedItem] = React.useState(null);
//   const handleItemClick = (event, item) => {
//     setSelectedItem(item); // Set the clicked item as selected
//   };

//   const renderComponentForSelectedItem = () => {
//     if (selectedItem?.label.includes("sublocation")) {
//       return <SublocationComponent label={selectedItem.label} />;
//     }
//     return <Typography variant="h5">Please select a sublocation</Typography>;
//   };

//   return (
//     <Box
//       sx={{
//         width: "100vw",
//         height: "100vh",
//       }}
//     >
//       <Stack spacing={0} direction="row">
//         <Box
//           sx={{ width: 1 / 5, height: "100vh", bgcolor: "#000", pt: 3, pl: 2 }}
//         >
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ display: { xs: "none", sm: "block" }, pl: 2, pb: 3 }}
//           >
//             WareHouse Inventory
//           </Typography>

//           <RichTreeView
//             defaultExpandedItems={["home"]}
//             // onNodeSelect={handleSelect}
//             slotProps={{
//               item: { slots: { groupTransition: TransitionComponent } },
//             }}
//             items={MUI_X_PRODUCTS}
//             onItemClick={handleItemClick}
            
//           />
//           {/* <FileExplorer /> */}
//         </Box>
//         <Box sx={{ width: 4 / 5, height: "100vh", bgcolor: "#fff" }}>
//           <PrimarySearchAppBar />
//           {renderComponentForSelectedItem()}
//           {/* <ShowTreeComponent activeTree={activeTree} selectedTree="location1" ></ShowTreeComponent> */}
//         </Box>
//       </Stack>
//     </Box>
//   );
// }


// import * as React from "react";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Stack from "@mui/material/Stack";
// import Collapse from "@mui/material/Collapse";
// import PrimarySearchAppBar from "./Navbar";
// import { RichTreeView } from "@mui/x-tree-view/RichTreeView";
// import { useSpring, animated } from "@react-spring/web";
// import { DisplayItemBox } from "./checkfunc";  // Import the external function

// // Tree structure: Locations -> Sublocations -> Items
// const MUI_X_PRODUCTS = [
//   {
//     id: "1.0",
//     label: "location1",
//     children: [
//       {
//         id: "1.1",
//         label: "sublocation1",
//         children: [
//           { id: "1.1.1", label: "item1" },
//           { id: "1.1.2", label: "item2" },
//         ],
//       },
//       {
//         id: "1.2",
//         label: "sublocation2",
//         children: [
//           { id: "1.2.1", label: "item1" },
//           { id: "1.2.2", label: "item2" },
//         ],
//       },
//     ],
//   },
//   {
//     id: "2.0",
//     label: "location2",
//     children: [
//       {
//         id: "2.1",
//         label: "sublocation1",
//         children: [
//           { id: "2.1.1", label: "item1" },
//           { id: "2.1.2", label: "item2" },
//         ],
//       },
//     ],
//   },
// ];

// function TransitionComponent(props) {
//   const style = useSpring({
//     to: {
//       opacity: props.in ? 1 : 0,
//       transform: `translate3d(${props.in ? 0 : 20}px,0,0)`,
//     },
//   });

//   return (
//     <animated.div style={style}>
//       <Collapse {...props} />
//     </animated.div>
//   );
// }

// export default function Test() {
//   const [selectedItem, setSelectedItem] = React.useState(null);  // State to store selected item

//   // Handle item click: Perform actions only for 'items'
//   const handleItemClick = (item) => {
//     // If it's an item (leaf node, e.g., "1.1.1"), trigger the function
//     if (item.children === undefined) {
//       setSelectedItem(item.label);  // Store selected item name in state
//     } else {
//       setSelectedItem(null);  // Reset if a location/sublocation is clicked
//     }
//   };

//   return (
//     <Box sx={{ width: "100vw", height: "100vh" }}>
//       <Stack spacing={0} direction="row">
//         <Box sx={{ width: 1 / 5, height: "100vh", bgcolor: "#000", pt: 3, pl: 2 }}>
//           <Typography variant="h6" noWrap component="div" sx={{ pl: 2, pb: 3 }}>
//             Warehouse Inventory
//           </Typography>

//           {/* Treeview displaying locations, sublocations, and items */}
//           <RichTreeView
//             defaultExpandedItems={["1.0"]}
//             slotProps={{
//               item: { slots: { groupTransition: TransitionComponent } },
//             }}
//             items={MUI_X_PRODUCTS}
//             onItemClick={handleItemClick}  // Click handler for treeview items
//           />
//         </Box>

//         {/* Main content area where item box will be displayed */}
//         <Box sx={{ width: 4 / 5, height: "100vh", bgcolor: "#fff", p: 2 }}>
//           <PrimarySearchAppBar />
//           {/* <DisplayItemBox /> */}
//           {/* Call the imported function to render the item box */}
//           {/* {selectedItem ? displayItemBox(selectedItem) : <Typography variant="h5">Please select an item</Typography>} */}
//           <PrimarySearchAppBar />
//           {selectedItem ?  console.log("pujo") : <Typography variant="h5">Please select an item</Typography>}
//         </Box>
//       </Stack>
//     </Box>
//   );
// }

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Collapse from "@mui/material/Collapse";
import PrimarySearchAppBar from "./Navbar";
import { RichTreeView } from "@mui/x-tree-view/RichTreeView";
import { useSpring, animated } from "@react-spring/web";
import CardDetails from "./CardDetails";

// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import { handleError, handleSuccess } from '../utils';
// import { ToastContainer } from 'react-toastify';

import Home from "./Home";
// import { displayItemBox } from "./displayItemBox";  // Import the external function

// Tree structure: Locations -> Sublocations -> Items
const MUI_X_PRODUCTS = [
  {
    id: "1.0",
    label: "location1",
    children: [
      {
        id: "1.1",
        label: "sublocation1",
        children: [
          { id: "1.1.1", label: "item1" },
          { id: "1.1.2", label: "item2" },
        ],
      },
      {
        id: "1.2",
        label: "sublocation2",
        children: [
          { id: "1.2.1", label: "item1" },
          { id: "1.2.2", label: "item2" },
        ],
      },
    ],
  },
  {
    id: "2.0",
    label: "location2",
    children: [
      {
        id: "2.1",
        label: "sublocation1",
        children: [
          { id: "2.1.1", label: "item1" },
          { id: "2.1.2", label: "item2" },
        ],
      },
    ],
  },
];

function TransitionComponent(props) {
  const style = useSpring({
    to: {
      opacity: props.in ? 1 : 0,
      transform: `translate3d(${props.in ? 0 : 20}px,0,0)`,
    },
  });

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  );
}

export default function Test() {
  const [selectedItem, setSelectedItem] = React.useState(null);  // State to store selected item

  // Handle item click: Perform actions only for 'items'
  const handleItemClick = ( event, node, label) => {
    console.log(node);
    // console.log(label);
    // console.log(event.innerHTML);
    console.log(node.length);
    if (node.length == 5) {
      // If node has no children, it's an item (leaf node)
      setSelectedItem(node);  // Store selected item label in state
    } else {
      setSelectedItem(null);  // If it's a location or sublocation, reset selection
    }
  };

  return (
    <>
    {/* <div className="test" style={{background: "yellow"}}>
    <RichTreeView
            defaultExpandedItems={["1.0"]}
            slotProps={{
              item: { slots: { groupTransition: TransitionComponent } },
            }}
            items={MUI_X_PRODUCTS}
            
            onItemClick={( event,node) => handleItemClick(event, node)}
          />
    </div> */}
    <Box sx={{ width: "100vw", height:"100vh" }}>
      <Stack spacing={0} direction="row">
        <Box sx={{ width: 1 / 5, height: "100vh", bgcolor: "#000", pt: 3, pl: 2, overflow: "hidden",
          overflowY: "scroll"   }}>
          <Typography variant="h6" noWrap component="div" sx={{ pl: 2, pb: 3 }}>
            Warehouse Inventory
          </Typography>

         
          <RichTreeView
            defaultExpandedItems={["1.0"]}
            slotProps={{
              item: { slots: { groupTransition: TransitionComponent } },
            }}
            items={MUI_X_PRODUCTS}
            
            onItemClick={( event,node) => handleItemClick(event, node)}
          />
        </Box>

       
        <Box sx={{p:0, width: 4 / 5, padding:0, height: "100vh", bgcolor: "#fff" , overflow: "hidden",
          overflowY: "scroll"  }}>
          <PrimarySearchAppBar />
          
         
          {selectedItem ? <CardDetails /> : (
            <Typography variant="h5">Please select an item</Typography>
          )}
       
        </Box>
      </Stack>
    </Box>
    </>
  );
}
