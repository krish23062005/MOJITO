import { useGSAP } from '@gsap/react'
import React from 'react'
import { SplitText, ScrollTrigger } from "gsap/all"
import { gsap } from "gsap"
import { openingHours, socials } from "../../constants"

gsap.registerPlugin(SplitText, ScrollTrigger);

const Contact = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#contact h2", {
        type: "words",
    }); 
    const timeline = gsap.timeline({
        scrollTrigger:{
            trigger:'#contact',
            start:'top center',
        },
        ease:"power1.inOut",
    })
    timeline
    .from(titleSplit.words,{
        opacity:0,
        yPercent:100,
        stagger:0.02,
    })
    .from("#contact h3, #contact p",{
        opacity:0,
        yPercent:100,
        stagger:0.02,
    })
    .from('.drink-img',{
        y:100,
        opacity:0,
        duration:1.2,
        ease:'power1.inOut'
    },'-=0.8')

    const parallaxTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '#contact',
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: true,
        }
    });
    parallaxTimeline
        .from('#f-right-leaf', { x: 100, y: -150 }, 0)
        .from('#f-left-leaf', { x: -100, y: 150 }, 0);
  })

  return (
    <footer id="contact">
        <img src="/images/footer-right-leaf.png" alt="leaf-right"  id='f-right-leaf' />
        <img src="/images/footer-left-leaf.png" alt="leaf-left"  id='f-left-leaf' />
        <img src="/images/footer-drinks.png" alt="footer-drinks" className="drink-img" />

        <div className='content'>
            <h2>Where to find us</h2>
            
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-6 text-center'>
                <div>
                    <h3>Visit our bar</h3>
                    <p>456 Raq Blvd. #404, Los Angeles, CA 90210</p>
                </div>
                <div>
                    <h3>Contact us</h3>
                    <p>+1 123-456-7890</p>
                    <p>hello@velvetpour.com</p>
                </div>
                <div>
                    <h3>Open every day</h3>
                    {openingHours.map((time) =>(
                        <p key={time.day}>
                            {time.day}: {time.time}
                        </p>
                    ))}
                </div>
            </div>

            <div className='mt-6'>
                <h3>Socials</h3>
                <div className='flex-center gap-5 mt-4'>
                    {socials.map((social) => (
                        <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                            <img src={social.icon} alt={social.name} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Contact