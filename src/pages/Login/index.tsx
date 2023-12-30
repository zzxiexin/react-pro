import { useEffect, useState } from 'react';
import login from '@store/index';
import { observer } from 'mobx-react';
const Login = () => {
  const [tmp, setTmp] = useState('');
  const { userInfo, changeUserInfo, removeUserInfo } = login;
  const { name } = userInfo;
  // 初始化时，取本地数据
  useEffect(() => {
    if (!name) {
      const { name } = JSON.parse(localStorage.getItem('user_info') || '{}');
      name && changeUserInfo?.({ name });
    }
  }, []);

  // 更新用户信息
  const updateInfo = (userInfo: { name: string }) => {
    changeUserInfo?.(userInfo);
    localStorage.setItem('user_info', JSON.stringify(userInfo));
  };

  return (
    <div>
      {name ? (
        <>
          {`welcome ${name}`}
          <button
            onClick={() => {
              removeUserInfo();
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

export default observer(Login);
