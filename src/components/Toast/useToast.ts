import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hoc/useRedux';
import { removeToast } from '../../store/slice/utilSlice';

const useToast = () => {
  const dispatch = useAppDispatch();
  const { toasts } = useAppSelector(({ util }) => ({
    toasts: util.toasts,
  }));

  useEffect(() => {
    if (toasts.length > 0) {
      const key = toasts[toasts.length - 1].key;

      setTimeout(() => {
        dispatch(removeToast(key));
      }, 700);
    }
  }, [toasts]);

  return {
    toasts,
  };
};

export default useToast;
