export interface Messages {
  sign_in: string;
  sign_up: string;
  nick: string;
  password: string;
  field_too_short: string;
  forgot_password_q: string;
  wrong_login: string;
}

export interface MessagesOptions {
  sign_in?: string;
  sign_up?: string;
  nick?: string;
  password?: string;
  field_too_short?: string;
  forgot_password_q?: string;
  wrong_login?: string;
}
