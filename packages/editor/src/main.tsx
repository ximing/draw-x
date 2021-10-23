import 'reflect-metadata';
import styles from './main.less';
import { Diagram } from '@/modules/diagram';
import { LeftNav } from '@/modules/leftNav';
import { ToolBar } from '@/modules/toolBar';
import { RightNav } from '@/modules/rightNav';

export default function Main() {
  return (
    <div className={styles.main}>
      <ToolBar />
      <div className={styles.content}>
        <LeftNav />
        <Diagram />
        <RightNav />
      </div>
    </div>
  );
}
