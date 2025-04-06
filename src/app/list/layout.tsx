import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function LayoutList({ children }: LayoutProps) {
  return (
    <>
      <div>
        {children}
        <p>&copy Next js</p>
        <p>list의 최상위 layout</p>
      </div>
    </>
  );
}

/*
// 최상위 app의 layout은 "모든 컴포넌트" 에 UI을 할당한다.
// 예를 들어 항상 쓰이는 상단의 네비게이션이나 footer, 고정 버튼
// 등등의 공통 UI가 필요할시 사용한다.
// 그리고, 개별적인 페이지에 들어갈 각각의 레이아웃이 있다면
// 해당 폴더에 layout.tsx를 만들면 된다.
// 결국 Next는 해당 폴더의 "최상위 폴더"의 layout를 찾고 그 부분을
// 공통으로 적용한다.
// 예시 코드는 위의 코드를 참고.
*/
