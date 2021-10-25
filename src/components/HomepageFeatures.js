import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '刺绣魔术贴',
    Svg: require('../../static/img/cixiu.svg').default,
    //Svg: require('../../static/img/cixiu2.svg').default,
    description: (
      <>
        刺绣T与刺绣手提包中运用魔术贴，在魔术贴上刺绣儿童绘制图案。
        刺绣可随意粘贴或撕下，便于更换款式，达到“一衣多穿”“一包多用”的效果。
      </>
    ),
  },
  {
    title: '中国风吉祥香包',
    Svg: require('../../static/img/xiangbao.svg').default,
    description: (
      <>
        香包外形以中国风人偶为设计，加以刺绣图案点缀。
        在具有香气的同时，中国风吉祥香包还具有美好寓意。
      </>
    ),
  },/*
  {
    title: 'Powered by React',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  */
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
