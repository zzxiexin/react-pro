import { useEffect, useState } from 'react';
import type { RootState } from '@store/index';
import { useSelector, useDispatch } from 'react-redux';
import { login, loginOut } from '@store/slices/login';

const Login = () => {
  const [tmp, setTmp] = useState('');
  const name = useSelector((state: RootState) => state.login.name);
  const dispatch = useDispatch();

  // 初始化时，取本地数据
  useEffect(() => {
    if (!name) {
      const { name } = JSON.parse(localStorage.getItem('user_info') || '{}');
      name && dispatch?.(login({ name }));
    }
  }, []);

  // 更新用户信息
  const updateInfo = (userInfo: { name: string }) => {
    dispatch?.(login(userInfo));
    localStorage.setItem('user_info', JSON.stringify(userInfo));
  };

  return (
    <div>
      {name ? (
        <>
          {`welcome ${name}`}
          <button
            onClick={() => {
              dispatch?.(loginOut({ name: '' }));
              localStorage.removeItem('user_info');
            }}
          >
            logout
          </button>
        </>
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
