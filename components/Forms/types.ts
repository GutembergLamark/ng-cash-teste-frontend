interface IMessageError {
  message: string;
}

export interface IErrors {
  username?: IMessageError;
  password?: IMessageError;
  confirmPassword?: IMessageError;
}
