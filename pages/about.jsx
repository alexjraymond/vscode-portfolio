const AboutPage = () => {
  return (
    <>
      <h3>A Little Bit About Me</h3>
<body>
    <div id="bio">
        <p>Hello, my name is <strong>Alex Raymond</strong>. I am a passionate and innovative web developer with a rich academic background, holding a bachelor's degree in History and a double minor in Computer Science and Web Programming & Applications. My educational journey has equipped me with a unique perspective on tech and its historical context, enabling me to approach web development with a fresh and multifaceted mindset.</p>

        <p>My passion extends beyond coding and algorithms; I am deeply involved in the world of improv comedy. With several years of experience under my belt, I have not only honed my skills as a performer but also as a coach and instructor. I am proud to be part of dynamic teams that perform across various esteemed stages in Los Angeles, Orange County, and nationally at renowned comedy festivals. This experience in improv has sharpened my ability to think on my feet and bring a creative twist to all my web development projects.</p>

        <p>As a lifelong learner, I am always eager to dive into the latest advancements in web technology. My enthusiasm shines when exploring new frameworks and updates - the excitement of a major update in React is akin to discovering a new strategy in a favorite trading card game. This blend of technical acumen and playful curiosity is what drives me to excel in both my professional and personal pursuits.</p>

        <p>I am thrilled to bring this unique combination of history, technology, and comedy to the table, creating engaging, innovative web solutions that stand out in the digital landscape.</p>
    </div>
</body>

    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
