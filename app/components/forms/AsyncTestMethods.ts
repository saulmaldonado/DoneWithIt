import settings from '../../config/settings';

const checkEmailAvailability = async (email: string) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,4}$/i;
  if (emailRegex.test(email)) {
    const result = await fetch(`${settings.apiUrl}/auth/email`, {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
    return result.ok;
  } else {
    return false;
  }
};

export default {
  checkEmailAvailability,
};
