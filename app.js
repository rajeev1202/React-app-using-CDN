// let heading2 = React.createElement("h2",{},"Rajeev Ranjan")



// let root = ReactDOM.createRoot(document.getElementById("container"))

// root.render(heading2)



// let obj = {
//     user :"rajeev",
//     f2(){
//         console.log("parent",this)
//         function f1(){ console.log("child",this)
//     }
//         f1();
//     }
    
// }
// let heading = document.createElement("h2")
// heading.innerHTML = "javascript ki taraf se hello"
// document.getElementById("container").appendChild(heading);
let heading3 = React.createElement("h4",{key:"1",style:{"backgroundColor": "#ebe234","fontSize":"20px",}},"pushpaRaj")
let heading2 = React.createElement("h4",{key:"2",style:{"backgroundColor": "#ebe234","fontSize":"20px",}},"Mai jhukega nahi sala")
let emptyElement = React.createElement("div",{key:"4",style:{"backgroundColor": "#ebe234","fontSize":"20px",}},[heading2,heading3])

let heading1 = React.createElement("h1",{key:"3",className:"color-red"},[emptyElement]);

let root = ReactDOM.createRoot(document.getElementById("react-root"))
let root2 = ReactDOM.createRoot(document.getElementById("react-root2"))
root.render(heading1);
root2.render(heading2);
// function f1(){

//     let user = "Rajeev";
//      return () => { console.log(user+' mai aagya')}
// }

// let f2 = f1()
// f2();

// obj.f2()
