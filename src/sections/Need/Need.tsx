import MainContainer from '@/components/MainContainer/MainContainer';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import styles from './Need.module.scss';
import cubeImage1 from '@/assets/cube1.png';
import cubeImage2 from '@/assets/cube2.png';
import NeedCard from '@/components/NeedCard/NeedCard';

export default function Need() {
  return (
    <section className={styles.need}>
      <MainContainer>
        <div>
          <SectionHeader
            tagLabel='Everything you need'
            heading='Streamlined for easy management'
            description='Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.'
          />

          <div className={styles.need__cards}>
            <NeedCard
              imgUrl={cubeImage1.src}
              heading='Integration ecosystem'
              description='Enhance your productivity by connecting with your favorite tools,
          keeping all your essentials in one place.'
            />
            <NeedCard
              imgUrl={cubeImage2.src}
              heading='Goal setting and tracking'
              description='Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.'
            />
          </div>
        </div>
      </MainContainer>
    </section>
  );
}
