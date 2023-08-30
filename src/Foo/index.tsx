import React, { type FC } from 'react';

interface A {
  a: string;
}

const Foo: FC<{
  /**
   * @description 标题
   * @default "标题"
   */
  title?: string;
  /**
   * @description 顺序
   */
  order?: number;
}> = (props) => {
  return <>{props.title}</>;
};

export default Foo;
