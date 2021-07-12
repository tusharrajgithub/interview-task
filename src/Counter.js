import React, { useState } from 'react';
import { Button, Badge } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Counter(){
const [count,setCount] = useState(0)
const haschild = count === 0  ? true :false;

  return (
      <div>
      {haschild && (<Button variant="danger" onClick = {(e)=>setCount(e.target.value)} onChange = {(e)=>{ count = e.target.value}}>
  Primary variant 
  <Badge variant="danger">
    
  </Badge>
</Button>)} 

{!haschild && (<Button variant="success" onChange = {(e)=>{ count = e.target.value}}>
  Secondary varient
  <Badge variant="success">
    
  </Badge>
</Button>)} 

</div>
)};
