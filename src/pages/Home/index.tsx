import { useLayoutEffect, useState } from 'react';
import Banner from './Banner';
import Nav from './Nav';
import SvgImg from './SvgImg';
import Start from './Start';

export default function IndexPage() {
  const [show, setShow] = useState(false);
  const onComplete = () => {
    setShow(true);
  };
  return (
    <div>
      {(show && (
        <>
          <Banner />
          <Nav />
          <SvgImg />
        </>
      )) || <Start onComplete={onComplete} />}
    </div>
  );
}
