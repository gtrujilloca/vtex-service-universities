interface Args {
  country: string;
}

interface University {
  domains: string[],
  country: string,
  alpha_two_code: string,
  web_pages: string[],
  "state-province": string,
  name: string
}

export const queryUniversities = async (_: unknown, { country }: Args, { clients }: Context) => {
  const response = await clients.universities.getUniversityByCountry(country);
  return response.data.map((university: University) => {
    const { "state-province": state, ...rest } = university;
    return {...rest, state_province: state}
  });
}