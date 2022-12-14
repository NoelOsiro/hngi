import React from 'react'

 interface Iprops {
    href:string,
    text:string,
    id:string,
    title:string,
    subtext:string,
 }
const LinkButton:React.FC<Iprops> = (props:Iprops) => {
  return (
    <a id={props.id} className='link' href={props.href} title={props.text}><span>{props.title}</span></a>
  )
}

export default LinkButton