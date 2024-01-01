import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type Item = {
  title: string;
  link: string;
  description: JSX.Element;
};

const List: Item[] = [
  {
    title: 'Helpful Commands',
    link: '/articles/helpful-commands',
    description: (
      <>
        A list of helpful commands that I forget almost every day 😂
      </>
    ),
  },
  {
    title: 'Helpful Resources',
    link: '/articles/helpful-resources',
    description: (
      <>
        A list of articles, videos, and other resources that I have found helpful 😁
      </>
    ),
  },
  {
    title: 'Blog',
    link: '/blog',
    description: (
      <>
        Generic blog articles written by me, as well as text companions to my YouTube videos 👍
      </>
    ),
  },
];

function ItemComponent({title, description, link}: Item) {
  return (
    
      <div className={clsx('col col--4')}>
        <div className="text--center padding-horiz--md">
        <Link href={link}><Heading as="h3">{title}</Heading></Link>
          <p>{description}</p>
        </div>
      </div>
    
  );
}

export function SiteOverview(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {List.map((props, idx) => (
            <ItemComponent key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
