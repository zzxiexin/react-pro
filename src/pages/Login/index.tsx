import { useEffect, useState } from 'react';
import useLoginStore from '@store/index';
const Login = () => {
  const [tmp, setTmp] = useState('');
  const name = useLoginStore((state) => state.name);
  const doLogin = useLoginStore((state) => state.doLogin);
  // 初始化时，取本地数据
  useEffect(() => {
    if (!name) {
      const { name } = JSON.parse(localStorage.getItem('user_info') || '{}');
      name && doLogin?.({ name });
    }
  }, []);

  // 更新用户信息
  const updateInfo = (userInfo: { name: string }) => {
    doLogin?.(userInfo);
    localStorage.setItem('user_info', JSON.stringify(userInfo));
  };

  return (
    <div>
      {name ? (
        `welcome ${name}`
      ) : (
        <>
          <input
            onChange={(e) => {
              setTmp(e?.target?.value);
            }}
          />
          annymous, please login<button onClick={() => updateInfo({ name: tmp })}>点击登陆</button>
        </>
      )}
    </div>
  );
};

export default Login;
