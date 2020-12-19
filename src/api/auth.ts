import apiClient from './client';
/**
 * SEND Auth Email
 * https://documenter.getpostman.com/view/6844904/SVYwJFwS?version=latest#ddf33347-83bf-4612-b545-e25021c0b3bf
 * @param email
 */
export const sendAuthEmail = (email: string) =>
  apiClient.post<SendAuthEmailResponse>('/api/v2/auth/sendmail', {
    email,
  });
export type SendAuthEmailResponse = { registered: boolean };

export type AuthResponse = {
  email: string;
  is_certified: boolean;
  username: string;
  id: string;
  created_at: string;
  updated_at: string;
  profile: {
    fk_user_id: string;
    display_name: string;
    short_bio: string;
    thumbnail: null;
    id: string;
    created_at: string;
    updated_at: string;
    profile_links: any;
  };
  tokens: {
    access_token: string;
    refresh_token: string;
  };
};

/**
 * Login using email code
 * docs  https://documenter.getpostman.com/view/6844904/SVYwJFwS?version=latest#a7237e10-150f-4ff9-95f2-9b4e718a860c
 * @param code
 */
export const emailCodeLogin = (code: string) =>
  apiClient.get<AuthResponse>(`/api/v2/auth/code/${code}`);

