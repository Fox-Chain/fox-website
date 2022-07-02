import { useLayoutEffect, useRef } from 'react';
import styles from './index.less';

const Page = () => {
  useLayoutEffect(()=>{
    /*//////////////////////
	*
	* SCROLLMAGIC STARTS
	*
	*//////////////////////
	// init controller
	var controller = new ScrollMagic.Controller();

  //flow
   $(".flow").each(function(){
     $(this).addClass('out');
     new ScrollMagic.Scene({
       triggerElement: this,
       triggerHook: 0,
       duration: 600
     })
     .on("enter", function(ev){$(ev.target.triggerElement()).removeClass('out');})
     .on("leave", function(ev){$(ev.target.triggerElement()).addClass('out');})
     .addTo(controller);
   });
 
  //fade
   $(".fade").each(function(){
     $(this).addClass('out');
     new ScrollMagic.Scene({
       triggerElement: this,
       triggerHook: 0.65
     })
     .on("enter", function(ev){$(ev.target.triggerElement()).removeClass('out');})
     .on("leave", function(ev){$(ev.target.triggerElement()).addClass('out');})
     .addTo(controller);
   });
 
 $('.container').removeClass('out');
  },[]);
  return (
    <div className={styles.page}>
      <div className="container out">
  <h1>Sleepless nights</h1>
  <p className="fade">However, standard default text can do the trick. I hope you enjoyed the fake text. The standard default text is designed to ramble about nothing. This string is randomly generated.</p>
  <p className="fade">This text will not appear in a consistent order. The standard default text is designed to ramble about nothing. Your design looks awesome by the way. If it is not real text, they will focus on the design.</p>
  <p className="fade">However, standard default text can do the trick. JavaScript has the awesome power to manipulate DOM elements on the fly. People tend to read writing. Humans are creative beings.</p>
  <h2 className="fade">Keep scrolling down</h2>
  <p className="fade">Cow pork loin sausage, beef ribs ribeye capicola pancetta porchetta cupim drumstick meatball short ribs ham hock pig. Biltong jowl frankfurter ground round bacon turkey turducken prosciutto cupim bresaola kevin swine ribeye short loin. Rump tail ham hamburger shank chicken tongue meatloaf. Tail tenderloin ball tip, pork chop meatball shank doner ham drumstick. Salami short loin shank filet mignon fatback jowl t-bone ball tip pork chop venison capicola meatball tongue tri-tip. Pork loin pork frankfurter ham hock tongue tail chuck jowl salami short ribs tenderloin chicken turducken.</p>
  <p className="fade">Rump filet mignon kevin chicken porchetta pastrami ham hock pork loin. Doner tenderloin fatback cow. Andouille alcatra meatloaf venison spare ribs, capicola salami porchetta filet mignon. Turducken chicken short ribs t-bone ground round meatball, ribeye kielbasa short loin boudin shoulder shank sirloin. Pancetta sausage andouille sirloin meatloaf fatback ball tip ham hock alcatra shank.</p>
  <h2 className="fade">Keep scrolling down</h2>
  <p className="fade">Meatball shoulder capicola, flank pork chop prosciutto turkey short ribs t-bone short loin. Doner beef ribs drumstick tail. Beef ribs flank pastrami bresaola andouille pig shankle ham hock boudin prosciutto. Swine bresaola shoulder filet mignon hamburger, landjaeger beef cow kielbasa flank strip steak. Turducken filet mignon swine, kielbasa shank boudin drumstick.</p>
  <p className="fade">Venison hamburger sirloin, pork belly beef ribs spare ribs biltong swine fatback capicola. Corned beef chicken tail, beef ribs porchetta ham hock fatback sausage capicola meatloaf swine shoulder tongue. Short loin ball tip strip steak, tri-tip picanha shank burgdoggen pork pancetta kielbasa venison porchetta leberkas chuck andouille. Short loin pancetta spare ribs, pig jerky pork loin cow boudin landjaeger swine jowl. Capicola bacon jerky pastrami ham hock bresaola leberkas.</p>
  <h2 className="fade">Keep scrolling down</h2>
  <p className="fade">However, standard default text can do the trick. I hope you enjoyed the fake text. The standard default text is designed to ramble about nothing. This string is randomly generated.</p>
  <p className="fade">This text will not appear in a consistent order. The standard default text is designed to ramble about nothing. Your design looks awesome by the way. If it is not real text, they will focus on the design.</p>
  <p className="fade">However, standard default text can do the trick. JavaScript has the awesome power to manipulate DOM elements on the fly. People tend to read writing. Humans are creative beings.</p>
  <div className="flowcontent flow">
    <div className="imageholder img1"></div>
    <div className="caption">
      <h4>"I needed you."</h4>
      <p>Gif</p>
    </div>
  </div>
  <div className="flowcontent flow">
    <div className="imageholder img2"></div>
    <div className="caption right">
      <h4>"She sat there in silence and waited."</h4>
      <p>Pexels image</p>
    </div>
  </div>
  <h2 className="fade">Keep scrolling down</h2>
  <p className="fade">Cow pork loin sausage, beef ribs ribeye capicola pancetta porchetta cupim drumstick meatball short ribs ham hock pig. Biltong jowl frankfurter ground round bacon turkey turducken prosciutto cupim bresaola kevin swine ribeye short loin. Rump tail ham hamburger shank chicken tongue meatloaf. Tail tenderloin ball tip, pork chop meatball shank doner ham drumstick. Salami short loin shank filet mignon fatback jowl t-bone ball tip pork chop venison capicola meatball tongue tri-tip. Pork loin pork frankfurter ham hock tongue tail chuck jowl salami short ribs tenderloin chicken turducken.</p>
  <p className="fade">Rump filet mignon kevin chicken porchetta pastrami ham hock pork loin. Doner tenderloin fatback cow. Andouille alcatra meatloaf venison spare ribs, capicola salami porchetta filet mignon. Turducken chicken short ribs t-bone ground round meatball, ribeye kielbasa short loin boudin shoulder shank sirloin. Pancetta sausage andouille sirloin meatloaf fatback ball tip ham hock alcatra shank.</p>
  <div className="flowcontent flow">
    <video autoplay="autoplay" poster="http://gifly.com//media_gifly/7/n/K/c/b/7nKc.jpg" loop="" muted="">
      <source src="http://gifly.com//media_gifly/7/n/K/c/b/7nKc.mp4" type="video/mp4"/>
    </video>
    <div className="caption">
      <h4>Weird monochromatic video</h4>
      <p>Gifly mp4 video</p>
    </div>
  </div>
  <h2 className="fade">After Hours Programming created</h2>
  <p className="fade">Meatball shoulder capicola, flank pork chop prosciutto turkey short ribs t-bone short loin. Doner beef ribs drumstick tail. Beef ribs flank pastrami bresaola andouille pig shankle ham hock boudin prosciutto. Swine bresaola shoulder filet mignon hamburger, landjaeger beef cow kielbasa flank strip steak. Turducken filet mignon swine, kielbasa shank boudin drumstick.</p>
  <p className="fade">Venison hamburger sirloin, pork belly beef ribs spare ribs biltong swine fatback capicola. Corned beef chicken tail, beef ribs porchetta ham hock fatback sausage capicola meatloaf swine shoulder tongue. Short loin ball tip strip steak, tri-tip picanha shank burgdoggen pork pancetta kielbasa venison porchetta leberkas chuck andouille. Short loin pancetta spare ribs, pig jerky pork loin cow boudin landjaeger swine jowl. Capicola bacon jerky pastrami ham hock bresaola leberkas.</p>
</div>
    </div>
  );
};

export default Page;
