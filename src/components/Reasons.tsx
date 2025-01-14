import React from 'react';
import styles from '../styles/Reasons.module.css';

const reasons = [
  {
    image: "/firstever.jpeg",
    text: "You have loved me unconditionally from the first night we went out. You never judged me for any joke I made, or dumb comments I've blurted out loud. You're patient with me when I'm annoying and excited to spend every second with me."
  },
  {
    image: "/haircut.jpeg",
    text: "You're always supportive of me and my goals. I know the market has been rough for jobs and I am disapointed for not having gotten a job already but you continue to make sure that you are not discouraging me. You believe in me and my abilities when I do not. You truly believe I'm one of the smartest men you've ever met and that gives me the confidence to work the hardest I can for you. I love you."
  },
  {
    image: "/3 month.jpeg",
    text: "You make me a better person with your kindness. I'm a mean person and I've grown to be nicer with you talking to me heart to heart. As a result of your radiating your kindness, I've become a better person and I love you for it."
  },
  {
    image: "/gym.jpeg",
    text: "The image speaks words that have not been invented yet to describe how attracted I am to you. You're the most beautiful woman to ever exist. I got a pretty crush."
  },
  {
    image: "/asia2.JPG",
    text: "A big reason why I love you is because the peace of mind you give me. I'm never stressed about our relationship whenever I'm with you. You're loyal, honest, and most importantly, fully committed to us."
  },
  {
    image: "/bday1.jpeg",
    text: "I love you because of your incredible commitment to becoming the best version of yourself. The way you strive to achieve your goals, grow in your career, and constantly push yourself inspires me every single day. I admire your determination and how you tackle challenges with such focus and grace. Watching you work hard and succeed fills me with so much pride because you’re not just creating a future for yourself, you’re showing me what it means to dream big and go after it with everything you’ve got. Your ambition and dedication are just a few of the many reasons I love and respect you so deeply."
  },
  {
    image: "/bridge.jpeg",
    text: "I love you because you make me feel like I’m the only man in the world. The way you look at me, support me, and choose me every day makes me feel so incredibly valued and loved. You see me for who I am, flaws and all, and still treat me like I’m everything you’ve ever wanted. It’s in the little things, like the way you listen to me, make me laugh, or remind me how much I mean to you. Knowing that you see me as your one and only gives me a sense of security and happiness that I’ve never felt before. You make me feel special in a way that no one else ever has, and I love you so much for that."
  },
  {
    image: "/mad.jpeg",
    text: "I love you because of how playful you are and how much fun you bring into our relationship. I love our silly play fights, the way you get fake mad at me just to see how I’ll react, and how it always ends in laughter. You have this amazing ability to keep things light and exciting, turning even the simplest moments into something special. Being with you is never boring because your energy and humor make every day feel fresh and fun. Those playful moments remind me of how much joy you bring into my life, and they’re a big part of why I love being with you."
  },
  {
    image: "/nyc.jpeg",
    text: "I love our meal times together because they’re so much more than just eating—they’re moments that bring us closer and create lasting memories. I love how excited you get when we go out to eat, how it lights up your face and brings out this adorable, childlike joy in you. Watching you enjoy the food, trying new things, or savoring your favorites makes me so happy because I know it’s something that genuinely brings you joy. Every meal we share becomes its own little adventure, a special moment that feels like ours alone. It’s not just about the food; it’s about the laughter, the conversations, and the way we connect. I cherish those times with you because they always remind me of how much I love sharing life’s simple joys with you."
  },
  {
    image: "/fight.jpeg",
    text: "I love you because you’re a fighter. You’ve been through so much, yet you never let it define you or hold you back. I admire your strength and resilience, the way you face challenges head-on and refuse to give up, no matter how tough things get. Your determination to keep moving forward, even when it’s not easy, inspires me more than I can put into words. I love that you don’t just survive—you thrive, and you do it with such grace and courage. Watching you overcome so much and still hold onto your kindness and love makes me fall for you even more. You’re a fighter in every sense, and it’s one of the many reasons I’m so proud to love you."
  },
  {
    image: "/filter.jpeg",
    text: "I love you because of your beautiful smile. It’s the kind of smile that lights up a room and instantly makes everything feel brighter. When you smile, it’s like the whole world pauses for a moment, and all I can do is admire how radiant and genuine you are. Your smile has this incredible way of lifting my spirits, no matter what kind of day I’m having. It’s not just beautiful—it’s contagious, spreading joy and warmth to everyone around you. Seeing you smile reminds me of how lucky I am to have you in my life and how much happiness you bring to it. It’s a smile I never want to stop chasing, because it’s one of my favorite things about you."
  },
  {
    image: "/asia1.JPEG",
    text: "Your beauty isn’t just in the way you look—though you take my breath away every time I see you—it’s in the way you carry yourself with such confidence and grace. It’s in your eyes that light up when you’re excited, in the way you laugh, and in the way your presence can make any place feel warm and welcoming. To me, your beauty goes beyond the surface; it’s in your kindness, your strength, and the way you love so deeply."
  },
  {
    image: "/candid.jpeg",
    text: "I love how you dress because you have an incredible sense of style that always captivates any room you walk into. You have this effortless way of putting together outfits that not only highlight your beauty but also reflect your confidence and personality. Whether it’s something casual or a stunning look for a special occasion, you always manage to take my breath away. It’s not just what you wear—it’s the way you wear it, with such poise and elegance, that leaves everyone in awe.  I also love how you carry yourself with such grace. There’s a strength in the way you move through the world, balancing confidence and kindness so naturally. You have this rare ability to command respect without demanding it, simply by being true to yourself. Watching you interact with others, always so composed and thoughtful, makes me admire you even more. Your grace is one of the many things that make you so extraordinary, and I’m constantly in awe of you because of it."   
  },
  {
    image: "/work.jpeg",
    text: "I love you because of your amazing hospitality and the way you always take care of me, especially when I need it the most. I’ll never forget when I had food poisoning and a 104-degree fever at the same time—you stayed by my side the entire time, making sure I was as comfortable as possible, even when it must have been exhausting for you. Your care and patience in moments like that mean so much to me. You always make sure I eat, even when I don’t feel like it, and you go out of your way to make sure I’m happy and taken care of. It’s in the little things, like how you check in on me or do thoughtful gestures to brighten my day, that I see how deeply you care. Your kindness and selflessness make me feel so loved, and I’m endlessly grateful to have you in my life."
  },
  {
    image: "/selfie.jpeg",
    text: "I love you."
  }  
];

const Reasons = () => {
  return (
    <div className={styles.grid}>
      {reasons.map((reason, index) => (
        <div key={index} className={styles.card}>
          <img 
            src={reason.image} 
            alt={`Reason ${index + 1}`}
            className={styles.image}
          />
          <div className={styles.content}>
            <p className={styles.text}>{reason.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reasons;