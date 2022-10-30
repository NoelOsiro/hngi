import React from 'react'

 interface Iprops {
    href:string,
    text:string,
    id:string
 }
const LinkButton:React.FC<Iprops> = (props:Iprops) => {
  return (
    <a id={props.id} className='link' href={props.href}><span>{props.text}</span></a>
  )
}

export default LinkButton