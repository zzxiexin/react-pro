import { useEffect, useState } from 'react';
import useAuth from '@src/config/router/Auth/useAuth';
const Login = () => {
  const { update_user_info, name } = useAuth();
  const [tmp, setTmp] = useState('');
  useEffect(() => {
    const { name } = JSON.parse(localStorage.getItem('user_info') || '{}');
    update_user_info({ name });
  }, []);
  const updateInfo = (info: { name: string }) => {
    update_user_info(info);
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
