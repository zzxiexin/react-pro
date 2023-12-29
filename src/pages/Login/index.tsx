import { useEffect, useState } from 'react';
import useAuth from '@src/config/router/Auth/useAuth';
const Login = () => {
  const { name, updateUserInfo } = useAuth();
  const [tmp, setTmp] = useState('');
  // 初始化取本地用户信息
  useEffect(() => {
    const { name } = JSON.parse(localStorage.getItem('user_info') || '{}');
    updateUserInfo?.({ name });
  }, []);

  // 更新用户信息
  const updateInfo = (info: { name: string }) => {
    updateUserInfo?.(info);
    localStorage.setItem('user_info', JSON.stringify(info));
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
