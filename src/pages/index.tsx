import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { SiteOverview } from '@site/src/components/SiteOverview';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <div className={clsx("container", styles.heroBanner)}>
      <img src="/img/jay.png" />
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Homepage`}
      description="Homepage for JayMartMedia with site overview information">
      <HomepageHeader />
      <main>
        <div className="text--center padding-horiz--md container">
          <Heading as='h1'>{siteConfig.title}</Heading>
          <p>
            This site contains helpful commands and resources that I have found
            helpful throughout my career. The blog portion of this site contains
            text companions to my YouTube videos, as well as other various blog
            posts. This information was initially posted in public Github repos,
            but I figured it was time for me to post it on a nicely styled site!
          </p>
          <SiteOverview />
        </div>
      </main>
    </Layout>
  );
}
