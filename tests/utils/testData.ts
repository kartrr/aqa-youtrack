// testData.ts
export const testUsers = {
  valid: {
    username: process.env.TEST_USERNAME!,
    email: process.env.TEST_EMAIL!,
    password: process.env.TEST_PASSWORD!
  }
};

function getEnvVar(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Environment variable ${name} is not set`);
  }
  return value;
}

export const testData = {
  username: getEnvVar('TEST_USERNAME'),
  email: getEnvVar('TEST_EMAIL'), 
  password: getEnvVar('TEST_PASSWORD')
};