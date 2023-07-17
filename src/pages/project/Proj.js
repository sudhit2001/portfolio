import gamestackTexture2Large from 'assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.jpg';
// import gamestackTexture2 from 'assets/gamestack-list.jpg';
import gamestackTexture2 from 'assets/quiz-2.png';
import gamestackTexture from 'assets/quiz-1.png';
import worldstackTexture2 from 'assets/world-2.png';
import worldstackTexture from 'assets/world-1.png';
import gamestackTextureLarge from 'assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
// import gamestackTexture from 'assets/gamestack-login.jpg';
import sliceTextureLarge from 'assets/slice-app-large.jpg';
import sliceTexturePlaceholder from 'assets/slice-app-placeholder.jpg';
import sliceTexture from 'assets/blog.png';
import sassTexture from 'assets/sass.png';
import backupTexture from 'assets/sudhit.jpg';
import sprTextureLarge from 'assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from 'assets/spr-lesson-builder-dark.jpg';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Proj.module.css';

const disciplines = ['Engineer', 'MERN', 'Android', 'ML AI CV', '3D Artist'];

export const Proj = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const projectFive = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [projectOne, projectTwo, projectThree, projectFour, projectFive];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    // const indicatorObserver = new IntersectionObserver(
    //   ([entry]) => {
    //     setScrollIndicatorHidden(!entry.isIntersecting);
    //   },
    //   { rootMargin: '-100% 0px 0px 0px' }
    // );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    // indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      //   indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      {/* <Meta
        title="Developer + Engineer"
        description="Portfolio of Sudhit Soni — a final year student at Thapar
          Institute of Engineering and Technology."
      /> */}
      {/* <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      /> */}
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Coming Soon"
        description="...."
        buttonText="View project code"
        buttonLink="/"
        model={{
          type: 'laptop',
          alt: '',
          textures: [
            {
              // srcSet: [sprTexture, sprTextureLarge],
              // placeholder: sprTexturePlaceholder,
              srcSet: [backupTexture, sliceTextureLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Quiz Application"
        description="Designed and developed  a basic quiz app using Flutter"
        buttonText="View project code"
        buttonLink="https://github.com/sudhit2001/quiz-app"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [gamestackTexture, gamestackTextureLarge],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [gamestackTexture2, gamestackTexture2Large],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Frontend Framework"
        description="With the help of SASS, I have created a framework similar to bootstrap."
        buttonText="View project code"
        buttonLink="https://github.com/sudhit2001/Framework-Sass"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [sassTexture, sliceTextureLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="World Time App"
        description="Design and development an application which delivers the current time of various locations using Flutter and World Time API."
        buttonText="View project code"
        buttonLink="https://github.com/sudhit2001/Blogs"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              // srcSet: [gamestackTexture, gamestackTextureLarge],
              srcSet: [worldstackTexture],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              // srcSet: [gamestackTexture2, gamestackTexture2Large],
              srcSet: [worldstackTexture2],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-5"
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={5}
        title="Blogs With Authentication"
        description="With the power of Django, I have created an application which list user's blogs/articles."
        buttonText="View project code"
        buttonLink="https://github.com/sudhit2001/Blogs"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [sliceTexture, sliceTextureLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      {/* <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      /> */}
      <Footer />
    </div>
  );
};
