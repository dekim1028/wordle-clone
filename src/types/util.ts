export interface IUtilInitState {
  toasts: ToastType[];
  isModalVisible: boolean;
}

export interface ToastType {
  key: string;
  text: string;
}
