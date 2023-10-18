import { useMemo, useState } from 'react';
import { gsap } from 'gsap';
import styles from './App.module.scss';

function App() {
  // 当前的值
  const [currentCount] = useState(0);
  const nextCount = useMemo(() => {
    return currentCount + 1;
  }, [currentCount]);
  const onChangeCount = () => {
    const currentNumId = document.getElementById('currentNumId');
    const currentNumId1 = document.getElementById('currentNumId1')!;
    if (currentNumId) {
      gsap.to(currentNumId, {
        y: -currentNumId.clientHeight,
        onComplete: () => {
          gsap.to(currentNumId1, {
            y: -currentNumId1.clientHeight,
          });
        },
      });
    }
  };

  const onBackCount = () => {
    const currentNumId = document.getElementById('currentNumId')!;
    const currentNumId1 = document.getElementById('currentNumId1')!;
    if (currentNumId1) {
      gsap.to(currentNumId1, {
        y: currentNumId1.clientHeight - currentNumId.clientHeight,
        onComplete: () => {
          gsap.to(currentNumId, {
            y: currentNumId1.clientHeight - currentNumId.clientHeight,
          });
        },
      });
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <div className={styles.countContainer}>
        <div key={currentCount} id="currentNumId" className={styles.rollNumber}>
          {currentCount}
        </div>
        <div key={nextCount} id="currentNumId1" className={styles.rollNumber}>
          {nextCount}
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            onChangeCount();
          }}
        >
          前进
        </button>
        <button
          onClick={() => {
            onBackCount();
          }}
        >
          后退
        </button>
      </div>
    </div>
  );
}

export default App;
