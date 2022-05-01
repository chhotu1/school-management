import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import FeatherIcon from "feather-icons-react";
import Helpers from '../Helpers';
const Breadcrumb = (props) => {
  return (
    <div className="breadcrumbContainer">
    <Image
      src={Helpers.Images.bradcome}
      alt="Picture of the author"
      className="d-block w-100"
      layout="responsive"
      height={400}
    />
    <p className="centered">{props.page}</p>
    <ul>
      <li><Link href="/">Home</Link></li>
      <li>
        <FeatherIcon
          icon="chevrons-right"
          width="20"
          height="20"
        />
      </li>
      <li>{props.page}</li>
    </ul>
  </div>
    
  )
}

export default Breadcrumb
