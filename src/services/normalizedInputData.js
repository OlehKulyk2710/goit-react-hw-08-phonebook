export const normalizeInputData = data => {
  const { name, email, password } = data;
  const normalizedName = name.trim();
  const normalizedEmail = email.trim().toLowerCase();
  const normalisedPassword = password.trim();

  return {
    name: normalizedName,
    email: normalizedEmail,
    password: normalisedPassword,
  };
};
