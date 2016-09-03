import React, { Component } from 'react'
import Type from './Type'
// the connect component's onclick name will be more descripitive but presentational doesn't care, it's just a click

const TypeList = ({info, onClick}) => {
  var arrays=[],tempArray=[]
  info.map(function(element, index){
    tempArray.push(element)
    if(index%3==2 ||index==info.length-1){
      arrays.push(tempArray )
      tempArray=[]
    }
  })

  return (
    <ul className="table">
    {
      arrays.map(function (arr, i) {
        return <div className="table-row" key={i}>
          {arr.map(function (type, idx) {
            console.log(i)
            console.log(idx)
            var keyy = idx + (3*i)
            return <Type key={idx + (3*i)} name={type.name} onClick={() => onClick(type.name)}/>
          })}
        </div>
      })
    }
    </ul>
  )
}


export default TypeList

// const TypeList = ({info, onClick}) => {
//   return (
//     <section class="col-xs-12 col-md-6">
//       <h5 class='str-weak-header'>Weak Against:</h5>
//       <ul class="table">
//         <div class="table-row">
//           <li class="cell type type-water">Water</li>
//           <li class="cell type type-ghost">Ghost</li>
//           <li class="cell type type-electric-active">Electric</li>
//         </div>
//         <div class="table-row">
//           <li class="cell type type-ice">Ice</li>
//         </div>
//       </ul>
//     </section>
//   )
// }


  //
  //
  //
  // {arrays.map(function(arr){
  //
  //     return (<div className="table-row">
  //
  //       {arr.map(function(type,idx){
  //             <Type key={idx} name={type.name} onClick={() => onClick(type.name)}/>
  //       })
  //
  //     </div>)
  // })}
  //
  //
  // <ul className="table">
  //   <div className="table-row">
  //   {
  //     info.map(function (type, idx) {
  //       // onclick details taken care of here
  //       if (idx === map.length - 1){
  //         return (
  //           <Type key={idx} name={type.name} onClick={() => onClick(type.name)}/>
  //           </div>
  //         )
  //       } else if (idx === 2) {
  //         return (
  //           <Type key={idx} name={type.name} onClick={() => onClick(type.name)}/>
  //           </div>
  //           <div className="table-row">
  //         )
  //       } else {
  //         return (<Type key={idx} name={type.name} onClick={() => onClick(type.name)}/>)
  //       }
  //     })
  //   }
  // </ul>
